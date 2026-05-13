# `googleDialogflowCxToolVersion` Submodule <a name="`googleDialogflowCxToolVersion` Submodule" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxToolVersion <a name="GoogleDialogflowCxToolVersion" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version google_dialogflow_cx_tool_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  parent: str,
  tool: GoogleDialogflowCxToolVersionTool,
  id: str = None,
  timeouts: GoogleDialogflowCxToolVersionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the tool version. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The tool to create a Version for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/tools/<Tool ID>. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.tool">tool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a></code> | tool block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#id GoogleDialogflowCxToolVersion#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts">GoogleDialogflowCxToolVersionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the tool version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#display_name GoogleDialogflowCxToolVersion#display_name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.parent"></a>

- *Type:* str

The tool to create a Version for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/tools/<Tool ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#parent GoogleDialogflowCxToolVersion#parent}

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.tool"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a>

tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#tool GoogleDialogflowCxToolVersion#tool}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#id GoogleDialogflowCxToolVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts">GoogleDialogflowCxToolVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#timeouts GoogleDialogflowCxToolVersion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTool">put_tool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#create GoogleDialogflowCxToolVersion#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#delete GoogleDialogflowCxToolVersion#delete}.

---

##### `put_tool` <a name="put_tool" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTool"></a>

```python
def put_tool(
  description: str,
  display_name: str,
  connector_spec: GoogleDialogflowCxToolVersionToolConnectorSpec = None,
  data_store_spec: GoogleDialogflowCxToolVersionToolDataStoreSpec = None,
  function_spec: GoogleDialogflowCxToolVersionToolFunctionSpec = None,
  open_api_spec: GoogleDialogflowCxToolVersionToolOpenApiSpec = None
) -> None
```

###### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTool.parameter.description"></a>

- *Type:* str

High level description of the Tool and its usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#description GoogleDialogflowCxToolVersion#description}

---

###### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTool.parameter.displayName"></a>

- *Type:* str

The human-readable name of the tool, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#display_name GoogleDialogflowCxToolVersion#display_name}

---

###### `connector_spec`<sup>Optional</sup> <a name="connector_spec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTool.parameter.connectorSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec">GoogleDialogflowCxToolVersionToolConnectorSpec</a>

connector_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#connector_spec GoogleDialogflowCxToolVersion#connector_spec}

---

###### `data_store_spec`<sup>Optional</sup> <a name="data_store_spec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTool.parameter.dataStoreSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec">GoogleDialogflowCxToolVersionToolDataStoreSpec</a>

data_store_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#data_store_spec GoogleDialogflowCxToolVersion#data_store_spec}

---

###### `function_spec`<sup>Optional</sup> <a name="function_spec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTool.parameter.functionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec">GoogleDialogflowCxToolVersionToolFunctionSpec</a>

function_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#function_spec GoogleDialogflowCxToolVersion#function_spec}

---

###### `open_api_spec`<sup>Optional</sup> <a name="open_api_spec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTool.parameter.openApiSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec">GoogleDialogflowCxToolVersionToolOpenApiSpec</a>

open_api_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#open_api_spec GoogleDialogflowCxToolVersion#open_api_spec}

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleDialogflowCxToolVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleDialogflowCxToolVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDialogflowCxToolVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDialogflowCxToolVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxToolVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference">GoogleDialogflowCxToolVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.tool">tool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference">GoogleDialogflowCxToolVersionToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts">GoogleDialogflowCxToolVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.toolInput">tool_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.timeouts"></a>

```python
timeouts: GoogleDialogflowCxToolVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference">GoogleDialogflowCxToolVersionTimeoutsOutputReference</a>

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.tool"></a>

```python
tool: GoogleDialogflowCxToolVersionToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference">GoogleDialogflowCxToolVersionToolOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleDialogflowCxToolVersionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts">GoogleDialogflowCxToolVersionTimeouts</a>

---

##### `tool_input`<sup>Optional</sup> <a name="tool_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.toolInput"></a>

```python
tool_input: GoogleDialogflowCxToolVersionTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxToolVersionConfig <a name="GoogleDialogflowCxToolVersionConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  parent: str,
  tool: GoogleDialogflowCxToolVersionTool,
  id: str = None,
  timeouts: GoogleDialogflowCxToolVersionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the tool version. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.parent">parent</a></code> | <code>str</code> | The tool to create a Version for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/tools/<Tool ID>. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.tool">tool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a></code> | tool block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#id GoogleDialogflowCxToolVersion#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts">GoogleDialogflowCxToolVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the tool version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#display_name GoogleDialogflowCxToolVersion#display_name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The tool to create a Version for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/tools/<Tool ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#parent GoogleDialogflowCxToolVersion#parent}

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.tool"></a>

```python
tool: GoogleDialogflowCxToolVersionTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a>

tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#tool GoogleDialogflowCxToolVersion#tool}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#id GoogleDialogflowCxToolVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.timeouts"></a>

```python
timeouts: GoogleDialogflowCxToolVersionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts">GoogleDialogflowCxToolVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#timeouts GoogleDialogflowCxToolVersion#timeouts}

---

### GoogleDialogflowCxToolVersionTimeouts <a name="GoogleDialogflowCxToolVersionTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#create GoogleDialogflowCxToolVersion#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#delete GoogleDialogflowCxToolVersion#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#create GoogleDialogflowCxToolVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#delete GoogleDialogflowCxToolVersion#delete}.

---

### GoogleDialogflowCxToolVersionTool <a name="GoogleDialogflowCxToolVersionTool" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool(
  description: str,
  display_name: str,
  connector_spec: GoogleDialogflowCxToolVersionToolConnectorSpec = None,
  data_store_spec: GoogleDialogflowCxToolVersionToolDataStoreSpec = None,
  function_spec: GoogleDialogflowCxToolVersionToolFunctionSpec = None,
  open_api_spec: GoogleDialogflowCxToolVersionToolOpenApiSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.description">description</a></code> | <code>str</code> | High level description of the Tool and its usage. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the tool, unique within the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.connectorSpec">connector_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec">GoogleDialogflowCxToolVersionToolConnectorSpec</a></code> | connector_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.dataStoreSpec">data_store_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec">GoogleDialogflowCxToolVersionToolDataStoreSpec</a></code> | data_store_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.functionSpec">function_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec">GoogleDialogflowCxToolVersionToolFunctionSpec</a></code> | function_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.openApiSpec">open_api_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec">GoogleDialogflowCxToolVersionToolOpenApiSpec</a></code> | open_api_spec block. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.description"></a>

```python
description: str
```

- *Type:* str

High level description of the Tool and its usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#description GoogleDialogflowCxToolVersion#description}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The human-readable name of the tool, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#display_name GoogleDialogflowCxToolVersion#display_name}

---

##### `connector_spec`<sup>Optional</sup> <a name="connector_spec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.connectorSpec"></a>

```python
connector_spec: GoogleDialogflowCxToolVersionToolConnectorSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec">GoogleDialogflowCxToolVersionToolConnectorSpec</a>

connector_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#connector_spec GoogleDialogflowCxToolVersion#connector_spec}

---

##### `data_store_spec`<sup>Optional</sup> <a name="data_store_spec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.dataStoreSpec"></a>

```python
data_store_spec: GoogleDialogflowCxToolVersionToolDataStoreSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec">GoogleDialogflowCxToolVersionToolDataStoreSpec</a>

data_store_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#data_store_spec GoogleDialogflowCxToolVersion#data_store_spec}

---

##### `function_spec`<sup>Optional</sup> <a name="function_spec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.functionSpec"></a>

```python
function_spec: GoogleDialogflowCxToolVersionToolFunctionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec">GoogleDialogflowCxToolVersionToolFunctionSpec</a>

function_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#function_spec GoogleDialogflowCxToolVersion#function_spec}

---

##### `open_api_spec`<sup>Optional</sup> <a name="open_api_spec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.openApiSpec"></a>

```python
open_api_spec: GoogleDialogflowCxToolVersionToolOpenApiSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec">GoogleDialogflowCxToolVersionToolOpenApiSpec</a>

open_api_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#open_api_spec GoogleDialogflowCxToolVersion#open_api_spec}

---

### GoogleDialogflowCxToolVersionToolConnectorSpec <a name="GoogleDialogflowCxToolVersionToolConnectorSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec(
  actions: IResolvable | typing.List[GoogleDialogflowCxToolVersionToolConnectorSpecActions],
  name: str,
  end_user_auth_config: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec.property.actions">actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions">GoogleDialogflowCxToolVersionToolConnectorSpecActions</a>]</code> | actions block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec.property.name">name</a></code> | <code>str</code> | The full resource name of the referenced Integration Connectors Connection. Format: projects/* /locations/* /connections/*. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec.property.endUserAuthConfig">end_user_auth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig</a></code> | end_user_auth_config block. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec.property.actions"></a>

```python
actions: IResolvable | typing.List[GoogleDialogflowCxToolVersionToolConnectorSpecActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions">GoogleDialogflowCxToolVersionToolConnectorSpecActions</a>]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#actions GoogleDialogflowCxToolVersion#actions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec.property.name"></a>

```python
name: str
```

- *Type:* str

The full resource name of the referenced Integration Connectors Connection. Format: projects/* /locations/* /connections/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#name GoogleDialogflowCxToolVersion#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `end_user_auth_config`<sup>Optional</sup> <a name="end_user_auth_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec.property.endUserAuthConfig"></a>

```python
end_user_auth_config: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig</a>

end_user_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#end_user_auth_config GoogleDialogflowCxToolVersion#end_user_auth_config}

---

### GoogleDialogflowCxToolVersionToolConnectorSpecActions <a name="GoogleDialogflowCxToolVersionToolConnectorSpecActions" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions(
  connection_action_id: str = None,
  entity_operation: GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation = None,
  input_fields: typing.List[str] = None,
  output_fields: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.connectionActionId">connection_action_id</a></code> | <code>str</code> | ID of a Connection action for the tool to use. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.entityOperation">entity_operation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation</a></code> | entity_operation block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.inputFields">input_fields</a></code> | <code>typing.List[str]</code> | Entity fields to use as inputs for the operation. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.outputFields">output_fields</a></code> | <code>typing.List[str]</code> | Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned. |

---

##### `connection_action_id`<sup>Optional</sup> <a name="connection_action_id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.connectionActionId"></a>

```python
connection_action_id: str
```

- *Type:* str

ID of a Connection action for the tool to use.

This field is part of a required union field 'action_spec'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#connection_action_id GoogleDialogflowCxToolVersion#connection_action_id}

---

##### `entity_operation`<sup>Optional</sup> <a name="entity_operation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.entityOperation"></a>

```python
entity_operation: GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation</a>

entity_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#entity_operation GoogleDialogflowCxToolVersion#entity_operation}

---

##### `input_fields`<sup>Optional</sup> <a name="input_fields" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.inputFields"></a>

```python
input_fields: typing.List[str]
```

- *Type:* typing.List[str]

Entity fields to use as inputs for the operation.

If no fields are specified, all fields of the Entity will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#input_fields GoogleDialogflowCxToolVersion#input_fields}

---

##### `output_fields`<sup>Optional</sup> <a name="output_fields" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.outputFields"></a>

```python
output_fields: typing.List[str]
```

- *Type:* typing.List[str]

Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#output_fields GoogleDialogflowCxToolVersion#output_fields}

---

### GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation <a name="GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation(
  entity_id: str,
  operation: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation.property.entityId">entity_id</a></code> | <code>str</code> | ID of the entity. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation.property.operation">operation</a></code> | <code>str</code> | The operation to perform on the entity. Possible values: ["LIST", "CREATE", "UPDATE", "DELETE", "GET"]. |

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

ID of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#entity_id GoogleDialogflowCxToolVersion#entity_id}

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation.property.operation"></a>

```python
operation: str
```

- *Type:* str

The operation to perform on the entity. Possible values: ["LIST", "CREATE", "UPDATE", "DELETE", "GET"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#operation GoogleDialogflowCxToolVersion#operation}

---

### GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig <a name="GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig(
  oauth2_auth_code_config: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig = None,
  oauth2_jwt_bearer_config: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig.property.oauth2AuthCodeConfig">oauth2_auth_code_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a></code> | oauth2_auth_code_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig.property.oauth2JwtBearerConfig">oauth2_jwt_bearer_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a></code> | oauth2_jwt_bearer_config block. |

---

##### `oauth2_auth_code_config`<sup>Optional</sup> <a name="oauth2_auth_code_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig.property.oauth2AuthCodeConfig"></a>

```python
oauth2_auth_code_config: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a>

oauth2_auth_code_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#oauth2_auth_code_config GoogleDialogflowCxToolVersion#oauth2_auth_code_config}

---

##### `oauth2_jwt_bearer_config`<sup>Optional</sup> <a name="oauth2_jwt_bearer_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig.property.oauth2JwtBearerConfig"></a>

```python
oauth2_jwt_bearer_config: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a>

oauth2_jwt_bearer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#oauth2_jwt_bearer_config GoogleDialogflowCxToolVersion#oauth2_jwt_bearer_config}

---

### GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig <a name="GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig(
  oauth_token: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig.property.oauthToken">oauth_token</a></code> | <code>str</code> | Oauth token value or parameter name to pass it through. |

---

##### `oauth_token`<sup>Required</sup> <a name="oauth_token" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig.property.oauthToken"></a>

```python
oauth_token: str
```

- *Type:* str

Oauth token value or parameter name to pass it through.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#oauth_token GoogleDialogflowCxToolVersion#oauth_token}

---

### GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig <a name="GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig(
  client_key: str,
  issuer: str,
  subject: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.clientKey">client_key</a></code> | <code>str</code> | Client key value or parameter name to pass it through. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.issuer">issuer</a></code> | <code>str</code> | Issuer value or parameter name to pass it through. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.subject">subject</a></code> | <code>str</code> | Subject value or parameter name to pass it through. |

---

##### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

Client key value or parameter name to pass it through.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#client_key GoogleDialogflowCxToolVersion#client_key}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Issuer value or parameter name to pass it through.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#issuer GoogleDialogflowCxToolVersion#issuer}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.subject"></a>

```python
subject: str
```

- *Type:* str

Subject value or parameter name to pass it through.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#subject GoogleDialogflowCxToolVersion#subject}

---

### GoogleDialogflowCxToolVersionToolDataStoreSpec <a name="GoogleDialogflowCxToolVersionToolDataStoreSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec(
  data_store_connections: IResolvable | typing.List[GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections],
  fallback_prompt: GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec.property.dataStoreConnections">data_store_connections</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>]</code> | data_store_connections block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec.property.fallbackPrompt">fallback_prompt</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a></code> | fallback_prompt block. |

---

##### `data_store_connections`<sup>Required</sup> <a name="data_store_connections" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec.property.dataStoreConnections"></a>

```python
data_store_connections: IResolvable | typing.List[GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>]

data_store_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#data_store_connections GoogleDialogflowCxToolVersion#data_store_connections}

---

##### `fallback_prompt`<sup>Required</sup> <a name="fallback_prompt" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec.property.fallbackPrompt"></a>

```python
fallback_prompt: GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a>

fallback_prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#fallback_prompt GoogleDialogflowCxToolVersion#fallback_prompt}

---

### GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections <a name="GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections(
  data_store: str = None,
  data_store_type: str = None,
  document_processing_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.dataStore">data_store</a></code> | <code>str</code> | The full name of the referenced data store. Formats: projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore} projects/{project}/locations/{location}/dataStores/{dataStore}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.dataStoreType">data_store_type</a></code> | <code>str</code> | The type of the connected data store. See [DataStoreType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#datastoretype) for valid values. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.documentProcessingMode">document_processing_mode</a></code> | <code>str</code> | The document processing mode for the data store connection. |

---

##### `data_store`<sup>Optional</sup> <a name="data_store" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.dataStore"></a>

```python
data_store: str
```

- *Type:* str

The full name of the referenced data store. Formats: projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore} projects/{project}/locations/{location}/dataStores/{dataStore}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#data_store GoogleDialogflowCxToolVersion#data_store}

---

##### `data_store_type`<sup>Optional</sup> <a name="data_store_type" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.dataStoreType"></a>

```python
data_store_type: str
```

- *Type:* str

The type of the connected data store. See [DataStoreType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#datastoretype) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#data_store_type GoogleDialogflowCxToolVersion#data_store_type}

---

##### `document_processing_mode`<sup>Optional</sup> <a name="document_processing_mode" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.documentProcessingMode"></a>

```python
document_processing_mode: str
```

- *Type:* str

The document processing mode for the data store connection.

Should only be set for PUBLIC_WEB and UNSTRUCTURED data stores. If not set it is considered as DOCUMENTS, as this is the legacy mode.
See [DocumentProcessingMode](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#documentprocessingmode) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#document_processing_mode GoogleDialogflowCxToolVersion#document_processing_mode}

---

### GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt <a name="GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt()
```


### GoogleDialogflowCxToolVersionToolFunctionSpec <a name="GoogleDialogflowCxToolVersionToolFunctionSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec(
  input_schema: str = None,
  output_schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec.property.inputSchema">input_schema</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec.property.outputSchema">output_schema</a></code> | <code>str</code> | Optional. |

---

##### `input_schema`<sup>Optional</sup> <a name="input_schema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec.property.inputSchema"></a>

```python
input_schema: str
```

- *Type:* str

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the input of the function.
This input is a JSON object that contains the function's parameters as properties of the object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#input_schema GoogleDialogflowCxToolVersion#input_schema}

---

##### `output_schema`<sup>Optional</sup> <a name="output_schema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec.property.outputSchema"></a>

```python
output_schema: str
```

- *Type:* str

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the output of the function.
This output is a JSON object that contains the function's parameters as properties of the object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#output_schema GoogleDialogflowCxToolVersion#output_schema}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpec <a name="GoogleDialogflowCxToolVersionToolOpenApiSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec(
  text_schema: str,
  authentication: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication = None,
  service_directory_config: GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig = None,
  tls_config: GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.textSchema">text_schema</a></code> | <code>str</code> | The OpenAPI schema specified as a text. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig</a></code> | tls_config block. |

---

##### `text_schema`<sup>Required</sup> <a name="text_schema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.textSchema"></a>

```python
text_schema: str
```

- *Type:* str

The OpenAPI schema specified as a text.

This field is part of a union field 'schema': only one of 'textSchema' may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#text_schema GoogleDialogflowCxToolVersion#text_schema}

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.authentication"></a>

```python
authentication: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#authentication GoogleDialogflowCxToolVersion#authentication}

---

##### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.serviceDirectoryConfig"></a>

```python
service_directory_config: GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#service_directory_config GoogleDialogflowCxToolVersion#service_directory_config}

---

##### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.tlsConfig"></a>

```python
tls_config: GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#tls_config GoogleDialogflowCxToolVersion#tls_config}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication(
  api_key_config: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig = None,
  bearer_token_config: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig = None,
  oauth_config: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig = None,
  service_agent_auth_config: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.bearerTokenConfig">bearer_token_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig">service_agent_auth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | service_agent_auth_config block. |

---

##### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.apiKeyConfig"></a>

```python
api_key_config: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#api_key_config GoogleDialogflowCxToolVersion#api_key_config}

---

##### `bearer_token_config`<sup>Optional</sup> <a name="bearer_token_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.bearerTokenConfig"></a>

```python
bearer_token_config: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#bearer_token_config GoogleDialogflowCxToolVersion#bearer_token_config}

---

##### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.oauthConfig"></a>

```python
oauth_config: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#oauth_config GoogleDialogflowCxToolVersion#oauth_config}

---

##### `service_agent_auth_config`<sup>Optional</sup> <a name="service_agent_auth_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig"></a>

```python
service_agent_auth_config: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

service_agent_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#service_agent_auth_config GoogleDialogflowCxToolVersion#service_agent_auth_config}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig(
  key_name: str,
  request_location: str,
  api_key: str = None,
  secret_version_for_api_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName">key_name</a></code> | <code>str</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation">request_location</a></code> | <code>str</code> | Key location in the request. See [RequestLocation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#requestlocation) for valid values. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey">api_key</a></code> | <code>str</code> | Optional. The API key. If the 'secretVersionForApiKey'' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey">secret_version_for_api_key</a></code> | <code>str</code> | Optional. |

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#key_name GoogleDialogflowCxToolVersion#key_name}

---

##### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation"></a>

```python
request_location: str
```

- *Type:* str

Key location in the request. See [RequestLocation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#requestlocation) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#request_location GoogleDialogflowCxToolVersion#request_location}

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

Optional. The API key. If the 'secretVersionForApiKey'' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#api_key GoogleDialogflowCxToolVersion#api_key}

---

##### `secret_version_for_api_key`<sup>Optional</sup> <a name="secret_version_for_api_key" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey"></a>

```python
secret_version_for_api_key: str
```

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the API key.
If this field is set, the apiKey field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#secret_version_for_api_key GoogleDialogflowCxToolVersion#secret_version_for_api_key}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig(
  secret_version_for_token: str = None,
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken">secret_version_for_token</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>str</code> | Optional. |

---

##### `secret_version_for_token`<sup>Optional</sup> <a name="secret_version_for_token" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken"></a>

```python
secret_version_for_token: str
```

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the Bearer token. If this field is set, the 'token' field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#secret_version_for_token GoogleDialogflowCxToolVersion#secret_version_for_token}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Optional.

The text token appended to the text Bearer to the request Authorization header.
[Session parameters reference](https://cloud.google.com/dialogflow/cx/docs/concept/parameter#session-ref) can be used to pass the token dynamically, e.g. '$session.params.parameter-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#token GoogleDialogflowCxToolVersion#token}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig(
  client_id: str,
  oauth_grant_type: str,
  token_endpoint: str,
  client_secret: str = None,
  scopes: typing.List[str] = None,
  secret_version_for_client_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.clientId">client_id</a></code> | <code>str</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType">oauth_grant_type</a></code> | <code>str</code> | OAuth grant types. See [OauthGrantType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#oauthgranttype) for valid values. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Optional. The OAuth scopes to grant. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret">secret_version_for_client_secret</a></code> | <code>str</code> | Optional. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#client_id GoogleDialogflowCxToolVersion#client_id}

---

##### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType"></a>

```python
oauth_grant_type: str
```

- *Type:* str

OAuth grant types. See [OauthGrantType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#oauthgranttype) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#oauth_grant_type GoogleDialogflowCxToolVersion#oauth_grant_type}

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#token_endpoint GoogleDialogflowCxToolVersion#token_endpoint}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#client_secret GoogleDialogflowCxToolVersion#client_secret}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Optional. The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#scopes GoogleDialogflowCxToolVersion#scopes}

---

##### `secret_version_for_client_secret`<sup>Optional</sup> <a name="secret_version_for_client_secret" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret"></a>

```python
secret_version_for_client_secret: str
```

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the client secret.
If this field is set, the clientSecret field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#secret_version_for_client_secret GoogleDialogflowCxToolVersion#secret_version_for_client_secret}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig(
  service_agent_auth: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth">service_agent_auth</a></code> | <code>str</code> | Optional. |

---

##### `service_agent_auth`<sup>Optional</sup> <a name="service_agent_auth" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth"></a>

```python
service_agent_auth: str
```

- *Type:* str

Optional.

Indicate the auth token type generated from the Diglogflow service agent.
The generated token is sent in the Authorization header.
See [ServiceAgentAuth](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#serviceagentauth) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#service_agent_auth GoogleDialogflowCxToolVersion#service_agent_auth}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig(
  service: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig.property.service">service</a></code> | <code>str</code> | The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>. LocationID of the service directory must be the same as the location of the agent. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig.property.service"></a>

```python
service: str
```

- *Type:* str

The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>. LocationID of the service directory must be the same as the location of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#service GoogleDialogflowCxToolVersion#service}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig(
  ca_certs: IResolvable | typing.List[GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig.property.caCerts">ca_certs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>]</code> | ca_certs block. |

---

##### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig.property.caCerts"></a>

```python
ca_certs: IResolvable | typing.List[GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#ca_certs GoogleDialogflowCxToolVersion#ca_certs}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts(
  cert: str,
  display_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts.property.cert">cert</a></code> | <code>str</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts.property.displayName">display_name</a></code> | <code>str</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts.property.cert"></a>

```python
cert: str
```

- *Type:* str

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store.
If this is empty or unspecified, Dialogflow will use Google's default trust store to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt name".
For instance a certificate can be self-signed using the following command:

```
  openssl x509 -req -days 200 -in example.com.csr \
    -signkey example.com.key \
    -out example.com.crt \
    -extfile <(printf "\nsubjectAltName='DNS:www.example.com'")
```

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#cert GoogleDialogflowCxToolVersion#cert}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#display_name GoogleDialogflowCxToolVersion#display_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxToolVersionTimeoutsOutputReference <a name="GoogleDialogflowCxToolVersionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts">GoogleDialogflowCxToolVersionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDialogflowCxToolVersionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts">GoogleDialogflowCxToolVersionTimeouts</a>

---


### GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference <a name="GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.entityIdInput">entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.operationInput">operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_id_input`<sup>Optional</sup> <a name="entity_id_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.entityIdInput"></a>

```python
entity_id_input: str
```

- *Type:* str

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.operationInput"></a>

```python
operation_input: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation</a>

---


### GoogleDialogflowCxToolVersionToolConnectorSpecActionsList <a name="GoogleDialogflowCxToolVersionToolConnectorSpecActionsList" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions">GoogleDialogflowCxToolVersionToolConnectorSpecActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDialogflowCxToolVersionToolConnectorSpecActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions">GoogleDialogflowCxToolVersionToolConnectorSpecActions</a>]

---


### GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference <a name="GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.putEntityOperation">put_entity_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetConnectionActionId">reset_connection_action_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetEntityOperation">reset_entity_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetInputFields">reset_input_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetOutputFields">reset_output_fields</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_entity_operation` <a name="put_entity_operation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.putEntityOperation"></a>

```python
def put_entity_operation(
  entity_id: str,
  operation: str
) -> None
```

###### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.putEntityOperation.parameter.entityId"></a>

- *Type:* str

ID of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#entity_id GoogleDialogflowCxToolVersion#entity_id}

---

###### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.putEntityOperation.parameter.operation"></a>

- *Type:* str

The operation to perform on the entity. Possible values: ["LIST", "CREATE", "UPDATE", "DELETE", "GET"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#operation GoogleDialogflowCxToolVersion#operation}

---

##### `reset_connection_action_id` <a name="reset_connection_action_id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetConnectionActionId"></a>

```python
def reset_connection_action_id() -> None
```

##### `reset_entity_operation` <a name="reset_entity_operation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetEntityOperation"></a>

```python
def reset_entity_operation() -> None
```

##### `reset_input_fields` <a name="reset_input_fields" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetInputFields"></a>

```python
def reset_input_fields() -> None
```

##### `reset_output_fields` <a name="reset_output_fields" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetOutputFields"></a>

```python
def reset_output_fields() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.entityOperation">entity_operation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.connectionActionIdInput">connection_action_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.entityOperationInput">entity_operation_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.inputFieldsInput">input_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.outputFieldsInput">output_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.connectionActionId">connection_action_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.inputFields">input_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.outputFields">output_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions">GoogleDialogflowCxToolVersionToolConnectorSpecActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_operation`<sup>Required</sup> <a name="entity_operation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.entityOperation"></a>

```python
entity_operation: GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference</a>

---

##### `connection_action_id_input`<sup>Optional</sup> <a name="connection_action_id_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.connectionActionIdInput"></a>

```python
connection_action_id_input: str
```

- *Type:* str

---

##### `entity_operation_input`<sup>Optional</sup> <a name="entity_operation_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.entityOperationInput"></a>

```python
entity_operation_input: GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation</a>

---

##### `input_fields_input`<sup>Optional</sup> <a name="input_fields_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.inputFieldsInput"></a>

```python
input_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `output_fields_input`<sup>Optional</sup> <a name="output_fields_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.outputFieldsInput"></a>

```python
output_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_action_id`<sup>Required</sup> <a name="connection_action_id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.connectionActionId"></a>

```python
connection_action_id: str
```

- *Type:* str

---

##### `input_fields`<sup>Required</sup> <a name="input_fields" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.inputFields"></a>

```python
input_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `output_fields`<sup>Required</sup> <a name="output_fields" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.outputFields"></a>

```python
output_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDialogflowCxToolVersionToolConnectorSpecActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions">GoogleDialogflowCxToolVersionToolConnectorSpecActions</a>

---


### GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.oauthTokenInput">oauth_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.oauthToken">oauth_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth_token_input`<sup>Optional</sup> <a name="oauth_token_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.oauthTokenInput"></a>

```python
oauth_token_input: str
```

- *Type:* str

---

##### `oauth_token`<sup>Required</sup> <a name="oauth_token" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.oauthToken"></a>

```python
oauth_token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a>

---


### GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.clientKeyInput">client_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.subjectInput">subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.clientKey">client_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_key_input`<sup>Optional</sup> <a name="client_key_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.clientKeyInput"></a>

```python
client_key_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.subjectInput"></a>

```python
subject_input: str
```

- *Type:* str

---

##### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a>

---


### GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2AuthCodeConfig">put_oauth2_auth_code_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2JwtBearerConfig">put_oauth2_jwt_bearer_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.resetOauth2AuthCodeConfig">reset_oauth2_auth_code_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.resetOauth2JwtBearerConfig">reset_oauth2_jwt_bearer_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_oauth2_auth_code_config` <a name="put_oauth2_auth_code_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2AuthCodeConfig"></a>

```python
def put_oauth2_auth_code_config(
  oauth_token: str
) -> None
```

###### `oauth_token`<sup>Required</sup> <a name="oauth_token" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2AuthCodeConfig.parameter.oauthToken"></a>

- *Type:* str

Oauth token value or parameter name to pass it through.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#oauth_token GoogleDialogflowCxToolVersion#oauth_token}

---

##### `put_oauth2_jwt_bearer_config` <a name="put_oauth2_jwt_bearer_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2JwtBearerConfig"></a>

```python
def put_oauth2_jwt_bearer_config(
  client_key: str,
  issuer: str,
  subject: str
) -> None
```

###### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2JwtBearerConfig.parameter.clientKey"></a>

- *Type:* str

Client key value or parameter name to pass it through.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#client_key GoogleDialogflowCxToolVersion#client_key}

---

###### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2JwtBearerConfig.parameter.issuer"></a>

- *Type:* str

Issuer value or parameter name to pass it through.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#issuer GoogleDialogflowCxToolVersion#issuer}

---

###### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2JwtBearerConfig.parameter.subject"></a>

- *Type:* str

Subject value or parameter name to pass it through.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#subject GoogleDialogflowCxToolVersion#subject}

---

##### `reset_oauth2_auth_code_config` <a name="reset_oauth2_auth_code_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.resetOauth2AuthCodeConfig"></a>

```python
def reset_oauth2_auth_code_config() -> None
```

##### `reset_oauth2_jwt_bearer_config` <a name="reset_oauth2_jwt_bearer_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.resetOauth2JwtBearerConfig"></a>

```python
def reset_oauth2_jwt_bearer_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2AuthCodeConfig">oauth2_auth_code_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2JwtBearerConfig">oauth2_jwt_bearer_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2AuthCodeConfigInput">oauth2_auth_code_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2JwtBearerConfigInput">oauth2_jwt_bearer_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth2_auth_code_config`<sup>Required</sup> <a name="oauth2_auth_code_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2AuthCodeConfig"></a>

```python
oauth2_auth_code_config: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference</a>

---

##### `oauth2_jwt_bearer_config`<sup>Required</sup> <a name="oauth2_jwt_bearer_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2JwtBearerConfig"></a>

```python
oauth2_jwt_bearer_config: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference</a>

---

##### `oauth2_auth_code_config_input`<sup>Optional</sup> <a name="oauth2_auth_code_config_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2AuthCodeConfigInput"></a>

```python
oauth2_auth_code_config_input: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a>

---

##### `oauth2_jwt_bearer_config_input`<sup>Optional</sup> <a name="oauth2_jwt_bearer_config_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2JwtBearerConfigInput"></a>

```python
oauth2_jwt_bearer_config_input: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig</a>

---


### GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference <a name="GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.putEndUserAuthConfig">put_end_user_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.resetEndUserAuthConfig">reset_end_user_auth_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_actions` <a name="put_actions" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.putActions"></a>

```python
def put_actions(
  value: IResolvable | typing.List[GoogleDialogflowCxToolVersionToolConnectorSpecActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.putActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions">GoogleDialogflowCxToolVersionToolConnectorSpecActions</a>]

---

##### `put_end_user_auth_config` <a name="put_end_user_auth_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.putEndUserAuthConfig"></a>

```python
def put_end_user_auth_config(
  oauth2_auth_code_config: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig = None,
  oauth2_jwt_bearer_config: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig = None
) -> None
```

###### `oauth2_auth_code_config`<sup>Optional</sup> <a name="oauth2_auth_code_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.putEndUserAuthConfig.parameter.oauth2AuthCodeConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a>

oauth2_auth_code_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#oauth2_auth_code_config GoogleDialogflowCxToolVersion#oauth2_auth_code_config}

---

###### `oauth2_jwt_bearer_config`<sup>Optional</sup> <a name="oauth2_jwt_bearer_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.putEndUserAuthConfig.parameter.oauth2JwtBearerConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a>

oauth2_jwt_bearer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#oauth2_jwt_bearer_config GoogleDialogflowCxToolVersion#oauth2_jwt_bearer_config}

---

##### `reset_end_user_auth_config` <a name="reset_end_user_auth_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.resetEndUserAuthConfig"></a>

```python
def reset_end_user_auth_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList">GoogleDialogflowCxToolVersionToolConnectorSpecActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.endUserAuthConfig">end_user_auth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.actionsInput">actions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions">GoogleDialogflowCxToolVersionToolConnectorSpecActions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.endUserAuthConfigInput">end_user_auth_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec">GoogleDialogflowCxToolVersionToolConnectorSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.actions"></a>

```python
actions: GoogleDialogflowCxToolVersionToolConnectorSpecActionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList">GoogleDialogflowCxToolVersionToolConnectorSpecActionsList</a>

---

##### `end_user_auth_config`<sup>Required</sup> <a name="end_user_auth_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.endUserAuthConfig"></a>

```python
end_user_auth_config: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.actionsInput"></a>

```python
actions_input: IResolvable | typing.List[GoogleDialogflowCxToolVersionToolConnectorSpecActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions">GoogleDialogflowCxToolVersionToolConnectorSpecActions</a>]

---

##### `end_user_auth_config_input`<sup>Optional</sup> <a name="end_user_auth_config_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.endUserAuthConfigInput"></a>

```python
end_user_auth_config_input: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolVersionToolConnectorSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec">GoogleDialogflowCxToolVersionToolConnectorSpec</a>

---


### GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList <a name="GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>]

---


### GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference <a name="GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStore">reset_data_store</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStoreType">reset_data_store_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDocumentProcessingMode">reset_document_processing_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_store` <a name="reset_data_store" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStore"></a>

```python
def reset_data_store() -> None
```

##### `reset_data_store_type` <a name="reset_data_store_type" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStoreType"></a>

```python
def reset_data_store_type() -> None
```

##### `reset_document_processing_mode` <a name="reset_document_processing_mode" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDocumentProcessingMode"></a>

```python
def reset_document_processing_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreInput">data_store_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreTypeInput">data_store_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingModeInput">document_processing_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStore">data_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreType">data_store_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingMode">document_processing_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_store_input`<sup>Optional</sup> <a name="data_store_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreInput"></a>

```python
data_store_input: str
```

- *Type:* str

---

##### `data_store_type_input`<sup>Optional</sup> <a name="data_store_type_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreTypeInput"></a>

```python
data_store_type_input: str
```

- *Type:* str

---

##### `document_processing_mode_input`<sup>Optional</sup> <a name="document_processing_mode_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingModeInput"></a>

```python
document_processing_mode_input: str
```

- *Type:* str

---

##### `data_store`<sup>Required</sup> <a name="data_store" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStore"></a>

```python
data_store: str
```

- *Type:* str

---

##### `data_store_type`<sup>Required</sup> <a name="data_store_type" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreType"></a>

```python
data_store_type: str
```

- *Type:* str

---

##### `document_processing_mode`<sup>Required</sup> <a name="document_processing_mode" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingMode"></a>

```python
document_processing_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>

---


### GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference <a name="GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a>

---


### GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference <a name="GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.putDataStoreConnections">put_data_store_connections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.putFallbackPrompt">put_fallback_prompt</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_store_connections` <a name="put_data_store_connections" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.putDataStoreConnections"></a>

```python
def put_data_store_connections(
  value: IResolvable | typing.List[GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.putDataStoreConnections.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>]

---

##### `put_fallback_prompt` <a name="put_fallback_prompt" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.putFallbackPrompt"></a>

```python
def put_fallback_prompt() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.dataStoreConnections">data_store_connections</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fallbackPrompt">fallback_prompt</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.dataStoreConnectionsInput">data_store_connections_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fallbackPromptInput">fallback_prompt_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec">GoogleDialogflowCxToolVersionToolDataStoreSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_store_connections`<sup>Required</sup> <a name="data_store_connections" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.dataStoreConnections"></a>

```python
data_store_connections: GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList</a>

---

##### `fallback_prompt`<sup>Required</sup> <a name="fallback_prompt" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fallbackPrompt"></a>

```python
fallback_prompt: GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference</a>

---

##### `data_store_connections_input`<sup>Optional</sup> <a name="data_store_connections_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.dataStoreConnectionsInput"></a>

```python
data_store_connections_input: IResolvable | typing.List[GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>]

---

##### `fallback_prompt_input`<sup>Optional</sup> <a name="fallback_prompt_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fallbackPromptInput"></a>

```python
fallback_prompt_input: GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolVersionToolDataStoreSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec">GoogleDialogflowCxToolVersionToolDataStoreSpec</a>

---


### GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference <a name="GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.resetInputSchema">reset_input_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.resetOutputSchema">reset_output_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_input_schema` <a name="reset_input_schema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.resetInputSchema"></a>

```python
def reset_input_schema() -> None
```

##### `reset_output_schema` <a name="reset_output_schema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.resetOutputSchema"></a>

```python
def reset_output_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.inputSchemaInput">input_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.outputSchemaInput">output_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.inputSchema">input_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.outputSchema">output_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec">GoogleDialogflowCxToolVersionToolFunctionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_schema_input`<sup>Optional</sup> <a name="input_schema_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.inputSchemaInput"></a>

```python
input_schema_input: str
```

- *Type:* str

---

##### `output_schema_input`<sup>Optional</sup> <a name="output_schema_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.outputSchemaInput"></a>

```python
output_schema_input: str
```

- *Type:* str

---

##### `input_schema`<sup>Required</sup> <a name="input_schema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.inputSchema"></a>

```python
input_schema: str
```

- *Type:* str

---

##### `output_schema`<sup>Required</sup> <a name="output_schema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.outputSchema"></a>

```python
output_schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolVersionToolFunctionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec">GoogleDialogflowCxToolVersionToolFunctionSpec</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey">reset_secret_version_for_api_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_secret_version_for_api_key` <a name="reset_secret_version_for_api_key" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey"></a>

```python
def reset_secret_version_for_api_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">request_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput">secret_version_for_api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation">request_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey">secret_version_for_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `request_location_input`<sup>Optional</sup> <a name="request_location_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```python
request_location_input: str
```

- *Type:* str

---

##### `secret_version_for_api_key_input`<sup>Optional</sup> <a name="secret_version_for_api_key_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput"></a>

```python
secret_version_for_api_key_input: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```python
request_location: str
```

- *Type:* str

---

##### `secret_version_for_api_key`<sup>Required</sup> <a name="secret_version_for_api_key" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey"></a>

```python
secret_version_for_api_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken">reset_secret_version_for_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken">reset_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secret_version_for_token` <a name="reset_secret_version_for_token" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken"></a>

```python
def reset_secret_version_for_token() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```python
def reset_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput">secret_version_for_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken">secret_version_for_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_version_for_token_input`<sup>Optional</sup> <a name="secret_version_for_token_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput"></a>

```python
secret_version_for_token_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `secret_version_for_token`<sup>Required</sup> <a name="secret_version_for_token" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken"></a>

```python
secret_version_for_token: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret">reset_secret_version_for_client_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```

##### `reset_secret_version_for_client_secret` <a name="reset_secret_version_for_client_secret" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret"></a>

```python
def reset_secret_version_for_client_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauth_grant_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput">secret_version_for_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauth_grant_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret">secret_version_for_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `oauth_grant_type_input`<sup>Optional</sup> <a name="oauth_grant_type_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```python
oauth_grant_type_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_version_for_client_secret_input`<sup>Optional</sup> <a name="secret_version_for_client_secret_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput"></a>

```python
secret_version_for_client_secret_input: str
```

- *Type:* str

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```python
oauth_grant_type: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_version_for_client_secret`<sup>Required</sup> <a name="secret_version_for_client_secret" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret"></a>

```python
secret_version_for_client_secret: str
```

- *Type:* str

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig">put_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig">put_bearer_token_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putOauthConfig">put_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig">put_service_agent_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig">reset_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig">reset_bearer_token_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig">reset_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig">reset_service_agent_auth_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key_config` <a name="put_api_key_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig"></a>

```python
def put_api_key_config(
  key_name: str,
  request_location: str,
  api_key: str = None,
  secret_version_for_api_key: str = None
) -> None
```

###### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.keyName"></a>

- *Type:* str

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#key_name GoogleDialogflowCxToolVersion#key_name}

---

###### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.requestLocation"></a>

- *Type:* str

Key location in the request. See [RequestLocation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#requestlocation) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#request_location GoogleDialogflowCxToolVersion#request_location}

---

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.apiKey"></a>

- *Type:* str

Optional. The API key. If the 'secretVersionForApiKey'' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#api_key GoogleDialogflowCxToolVersion#api_key}

---

###### `secret_version_for_api_key`<sup>Optional</sup> <a name="secret_version_for_api_key" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.secretVersionForApiKey"></a>

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the API key.
If this field is set, the apiKey field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#secret_version_for_api_key GoogleDialogflowCxToolVersion#secret_version_for_api_key}

---

##### `put_bearer_token_config` <a name="put_bearer_token_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig"></a>

```python
def put_bearer_token_config(
  secret_version_for_token: str = None,
  token: str = None
) -> None
```

###### `secret_version_for_token`<sup>Optional</sup> <a name="secret_version_for_token" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig.parameter.secretVersionForToken"></a>

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the Bearer token. If this field is set, the 'token' field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#secret_version_for_token GoogleDialogflowCxToolVersion#secret_version_for_token}

---

###### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig.parameter.token"></a>

- *Type:* str

Optional.

The text token appended to the text Bearer to the request Authorization header.
[Session parameters reference](https://cloud.google.com/dialogflow/cx/docs/concept/parameter#session-ref) can be used to pass the token dynamically, e.g. '$session.params.parameter-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#token GoogleDialogflowCxToolVersion#token}

---

##### `put_oauth_config` <a name="put_oauth_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putOauthConfig"></a>

```python
def put_oauth_config(
  client_id: str,
  oauth_grant_type: str,
  token_endpoint: str,
  client_secret: str = None,
  scopes: typing.List[str] = None,
  secret_version_for_client_secret: str = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.clientId"></a>

- *Type:* str

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#client_id GoogleDialogflowCxToolVersion#client_id}

---

###### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.oauthGrantType"></a>

- *Type:* str

OAuth grant types. See [OauthGrantType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#oauthgranttype) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#oauth_grant_type GoogleDialogflowCxToolVersion#oauth_grant_type}

---

###### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.tokenEndpoint"></a>

- *Type:* str

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#token_endpoint GoogleDialogflowCxToolVersion#token_endpoint}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.clientSecret"></a>

- *Type:* str

Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#client_secret GoogleDialogflowCxToolVersion#client_secret}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.scopes"></a>

- *Type:* typing.List[str]

Optional. The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#scopes GoogleDialogflowCxToolVersion#scopes}

---

###### `secret_version_for_client_secret`<sup>Optional</sup> <a name="secret_version_for_client_secret" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.secretVersionForClientSecret"></a>

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the client secret.
If this field is set, the clientSecret field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#secret_version_for_client_secret GoogleDialogflowCxToolVersion#secret_version_for_client_secret}

---

##### `put_service_agent_auth_config` <a name="put_service_agent_auth_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig"></a>

```python
def put_service_agent_auth_config(
  service_agent_auth: str = None
) -> None
```

###### `service_agent_auth`<sup>Optional</sup> <a name="service_agent_auth" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig.parameter.serviceAgentAuth"></a>

- *Type:* str

Optional.

Indicate the auth token type generated from the Diglogflow service agent.
The generated token is sent in the Authorization header.
See [ServiceAgentAuth](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#serviceagentauth) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#service_agent_auth GoogleDialogflowCxToolVersion#service_agent_auth}

---

##### `reset_api_key_config` <a name="reset_api_key_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig"></a>

```python
def reset_api_key_config() -> None
```

##### `reset_bearer_token_config` <a name="reset_bearer_token_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig"></a>

```python
def reset_bearer_token_config() -> None
```

##### `reset_oauth_config` <a name="reset_oauth_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig"></a>

```python
def reset_oauth_config() -> None
```

##### `reset_service_agent_auth_config` <a name="reset_service_agent_auth_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig"></a>

```python
def reset_service_agent_auth_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig">bearer_token_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig">service_agent_auth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput">api_key_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput">bearer_token_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput">oauth_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput">service_agent_auth_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_config`<sup>Required</sup> <a name="api_key_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig"></a>

```python
api_key_config: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearer_token_config`<sup>Required</sup> <a name="bearer_token_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig"></a>

```python
bearer_token_config: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauth_config`<sup>Required</sup> <a name="oauth_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig"></a>

```python
oauth_config: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference</a>

---

##### `service_agent_auth_config`<sup>Required</sup> <a name="service_agent_auth_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig"></a>

```python
service_agent_auth_config: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a>

---

##### `api_key_config_input`<sup>Optional</sup> <a name="api_key_config_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```python
api_key_config_input: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `bearer_token_config_input`<sup>Optional</sup> <a name="bearer_token_config_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```python
bearer_token_config_input: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `oauth_config_input`<sup>Optional</sup> <a name="oauth_config_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput"></a>

```python
oauth_config_input: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `service_agent_auth_config_input`<sup>Optional</sup> <a name="service_agent_auth_config_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput"></a>

```python
service_agent_auth_config_input: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth">reset_service_agent_auth</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_agent_auth` <a name="reset_service_agent_auth" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth"></a>

```python
def reset_service_agent_auth() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput">service_agent_auth_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth">service_agent_auth</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_agent_auth_input`<sup>Optional</sup> <a name="service_agent_auth_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput"></a>

```python
service_agent_auth_input: str
```

- *Type:* str

---

##### `service_agent_auth`<sup>Required</sup> <a name="service_agent_auth" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth"></a>

```python
service_agent_auth: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putAuthentication">put_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putServiceDirectoryConfig">put_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putTlsConfig">put_tls_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resetAuthentication">reset_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resetServiceDirectoryConfig">reset_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resetTlsConfig">reset_tls_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authentication` <a name="put_authentication" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putAuthentication"></a>

```python
def put_authentication(
  api_key_config: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig = None,
  bearer_token_config: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig = None,
  oauth_config: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig = None,
  service_agent_auth_config: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig = None
) -> None
```

###### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putAuthentication.parameter.apiKeyConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#api_key_config GoogleDialogflowCxToolVersion#api_key_config}

---

###### `bearer_token_config`<sup>Optional</sup> <a name="bearer_token_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putAuthentication.parameter.bearerTokenConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#bearer_token_config GoogleDialogflowCxToolVersion#bearer_token_config}

---

###### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putAuthentication.parameter.oauthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#oauth_config GoogleDialogflowCxToolVersion#oauth_config}

---

###### `service_agent_auth_config`<sup>Optional</sup> <a name="service_agent_auth_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putAuthentication.parameter.serviceAgentAuthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

service_agent_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#service_agent_auth_config GoogleDialogflowCxToolVersion#service_agent_auth_config}

---

##### `put_service_directory_config` <a name="put_service_directory_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putServiceDirectoryConfig"></a>

```python
def put_service_directory_config(
  service: str
) -> None
```

###### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putServiceDirectoryConfig.parameter.service"></a>

- *Type:* str

The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>. LocationID of the service directory must be the same as the location of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#service GoogleDialogflowCxToolVersion#service}

---

##### `put_tls_config` <a name="put_tls_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putTlsConfig"></a>

```python
def put_tls_config(
  ca_certs: IResolvable | typing.List[GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts]
) -> None
```

###### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putTlsConfig.parameter.caCerts"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#ca_certs GoogleDialogflowCxToolVersion#ca_certs}

---

##### `reset_authentication` <a name="reset_authentication" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resetAuthentication"></a>

```python
def reset_authentication() -> None
```

##### `reset_service_directory_config` <a name="reset_service_directory_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resetServiceDirectoryConfig"></a>

```python
def reset_service_directory_config() -> None
```

##### `reset_tls_config` <a name="reset_tls_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resetTlsConfig"></a>

```python
def reset_tls_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.authenticationInput">authentication_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput">service_directory_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.textSchemaInput">text_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.tlsConfigInput">tls_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.textSchema">text_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec">GoogleDialogflowCxToolVersionToolOpenApiSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.authentication"></a>

```python
authentication: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference</a>

---

##### `service_directory_config`<sup>Required</sup> <a name="service_directory_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.serviceDirectoryConfig"></a>

```python
service_directory_config: GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference</a>

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.tlsConfig"></a>

```python
tls_config: GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference</a>

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.authenticationInput"></a>

```python
authentication_input: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication</a>

---

##### `service_directory_config_input`<sup>Optional</sup> <a name="service_directory_config_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput"></a>

```python
service_directory_config_input: GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `text_schema_input`<sup>Optional</sup> <a name="text_schema_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.textSchemaInput"></a>

```python
text_schema_input: str
```

- *Type:* str

---

##### `tls_config_input`<sup>Optional</sup> <a name="tls_config_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.tlsConfigInput"></a>

```python
tls_config_input: GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig</a>

---

##### `text_schema`<sup>Required</sup> <a name="text_schema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.textSchema"></a>

```python
text_schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolVersionToolOpenApiSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec">GoogleDialogflowCxToolVersionToolOpenApiSpec</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>]

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput">cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert">cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert_input`<sup>Optional</sup> <a name="cert_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput"></a>

```python
cert_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert"></a>

```python
cert: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.putCaCerts">put_ca_certs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ca_certs` <a name="put_ca_certs" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.putCaCerts"></a>

```python
def put_ca_certs(
  value: IResolvable | typing.List[GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.caCerts">ca_certs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput">ca_certs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.caCerts"></a>

```python
ca_certs: GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList</a>

---

##### `ca_certs_input`<sup>Optional</sup> <a name="ca_certs_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput"></a>

```python
ca_certs_input: IResolvable | typing.List[GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig</a>

---


### GoogleDialogflowCxToolVersionToolOutputReference <a name="GoogleDialogflowCxToolVersionToolOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_cx_tool_version

googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putConnectorSpec">put_connector_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putDataStoreSpec">put_data_store_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putFunctionSpec">put_function_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putOpenApiSpec">put_open_api_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetConnectorSpec">reset_connector_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetDataStoreSpec">reset_data_store_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetFunctionSpec">reset_function_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetOpenApiSpec">reset_open_api_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_connector_spec` <a name="put_connector_spec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putConnectorSpec"></a>

```python
def put_connector_spec(
  actions: IResolvable | typing.List[GoogleDialogflowCxToolVersionToolConnectorSpecActions],
  name: str,
  end_user_auth_config: GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig = None
) -> None
```

###### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putConnectorSpec.parameter.actions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions">GoogleDialogflowCxToolVersionToolConnectorSpecActions</a>]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#actions GoogleDialogflowCxToolVersion#actions}

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putConnectorSpec.parameter.name"></a>

- *Type:* str

The full resource name of the referenced Integration Connectors Connection. Format: projects/* /locations/* /connections/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#name GoogleDialogflowCxToolVersion#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

###### `end_user_auth_config`<sup>Optional</sup> <a name="end_user_auth_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putConnectorSpec.parameter.endUserAuthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig</a>

end_user_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#end_user_auth_config GoogleDialogflowCxToolVersion#end_user_auth_config}

---

##### `put_data_store_spec` <a name="put_data_store_spec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putDataStoreSpec"></a>

```python
def put_data_store_spec(
  data_store_connections: IResolvable | typing.List[GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections],
  fallback_prompt: GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt
) -> None
```

###### `data_store_connections`<sup>Required</sup> <a name="data_store_connections" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putDataStoreSpec.parameter.dataStoreConnections"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections</a>]

data_store_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#data_store_connections GoogleDialogflowCxToolVersion#data_store_connections}

---

###### `fallback_prompt`<sup>Required</sup> <a name="fallback_prompt" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putDataStoreSpec.parameter.fallbackPrompt"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a>

fallback_prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#fallback_prompt GoogleDialogflowCxToolVersion#fallback_prompt}

---

##### `put_function_spec` <a name="put_function_spec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putFunctionSpec"></a>

```python
def put_function_spec(
  input_schema: str = None,
  output_schema: str = None
) -> None
```

###### `input_schema`<sup>Optional</sup> <a name="input_schema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putFunctionSpec.parameter.inputSchema"></a>

- *Type:* str

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the input of the function.
This input is a JSON object that contains the function's parameters as properties of the object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#input_schema GoogleDialogflowCxToolVersion#input_schema}

---

###### `output_schema`<sup>Optional</sup> <a name="output_schema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putFunctionSpec.parameter.outputSchema"></a>

- *Type:* str

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the output of the function.
This output is a JSON object that contains the function's parameters as properties of the object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#output_schema GoogleDialogflowCxToolVersion#output_schema}

---

##### `put_open_api_spec` <a name="put_open_api_spec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putOpenApiSpec"></a>

```python
def put_open_api_spec(
  text_schema: str,
  authentication: GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication = None,
  service_directory_config: GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig = None,
  tls_config: GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig = None
) -> None
```

###### `text_schema`<sup>Required</sup> <a name="text_schema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putOpenApiSpec.parameter.textSchema"></a>

- *Type:* str

The OpenAPI schema specified as a text.

This field is part of a union field 'schema': only one of 'textSchema' may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#text_schema GoogleDialogflowCxToolVersion#text_schema}

---

###### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putOpenApiSpec.parameter.authentication"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#authentication GoogleDialogflowCxToolVersion#authentication}

---

###### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putOpenApiSpec.parameter.serviceDirectoryConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#service_directory_config GoogleDialogflowCxToolVersion#service_directory_config}

---

###### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putOpenApiSpec.parameter.tlsConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_tool_version#tls_config GoogleDialogflowCxToolVersion#tls_config}

---

##### `reset_connector_spec` <a name="reset_connector_spec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetConnectorSpec"></a>

```python
def reset_connector_spec() -> None
```

##### `reset_data_store_spec` <a name="reset_data_store_spec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetDataStoreSpec"></a>

```python
def reset_data_store_spec() -> None
```

##### `reset_function_spec` <a name="reset_function_spec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetFunctionSpec"></a>

```python
def reset_function_spec() -> None
```

##### `reset_open_api_spec` <a name="reset_open_api_spec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetOpenApiSpec"></a>

```python
def reset_open_api_spec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.connectorSpec">connector_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.dataStoreSpec">data_store_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference">GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.functionSpec">function_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference">GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.openApiSpec">open_api_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.toolType">tool_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.connectorSpecInput">connector_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec">GoogleDialogflowCxToolVersionToolConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.dataStoreSpecInput">data_store_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec">GoogleDialogflowCxToolVersionToolDataStoreSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.functionSpecInput">function_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec">GoogleDialogflowCxToolVersionToolFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.openApiSpecInput">open_api_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec">GoogleDialogflowCxToolVersionToolOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_spec`<sup>Required</sup> <a name="connector_spec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.connectorSpec"></a>

```python
connector_spec: GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference</a>

---

##### `data_store_spec`<sup>Required</sup> <a name="data_store_spec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.dataStoreSpec"></a>

```python
data_store_spec: GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference">GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference</a>

---

##### `function_spec`<sup>Required</sup> <a name="function_spec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.functionSpec"></a>

```python
function_spec: GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference">GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `open_api_spec`<sup>Required</sup> <a name="open_api_spec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.openApiSpec"></a>

```python
open_api_spec: GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference</a>

---

##### `tool_type`<sup>Required</sup> <a name="tool_type" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.toolType"></a>

```python
tool_type: str
```

- *Type:* str

---

##### `connector_spec_input`<sup>Optional</sup> <a name="connector_spec_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.connectorSpecInput"></a>

```python
connector_spec_input: GoogleDialogflowCxToolVersionToolConnectorSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec">GoogleDialogflowCxToolVersionToolConnectorSpec</a>

---

##### `data_store_spec_input`<sup>Optional</sup> <a name="data_store_spec_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.dataStoreSpecInput"></a>

```python
data_store_spec_input: GoogleDialogflowCxToolVersionToolDataStoreSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec">GoogleDialogflowCxToolVersionToolDataStoreSpec</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `function_spec_input`<sup>Optional</sup> <a name="function_spec_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.functionSpecInput"></a>

```python
function_spec_input: GoogleDialogflowCxToolVersionToolFunctionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec">GoogleDialogflowCxToolVersionToolFunctionSpec</a>

---

##### `open_api_spec_input`<sup>Optional</sup> <a name="open_api_spec_input" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.openApiSpecInput"></a>

```python
open_api_spec_input: GoogleDialogflowCxToolVersionToolOpenApiSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec">GoogleDialogflowCxToolVersionToolOpenApiSpec</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolVersionTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a>

---



