# `googleCesTool` Submodule <a name="`googleCesTool` Submodule" id="@cdktn/provider-google-beta.googleCesTool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesTool <a name="GoogleCesTool" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool google_ces_tool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesTool(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app: str,
  location: str,
  tool_id: str,
  client_function: GoogleCesToolClientFunction = None,
  data_store_tool: GoogleCesToolDataStoreTool = None,
  execution_type: str = None,
  google_search_tool: GoogleCesToolGoogleSearchTool = None,
  id: str = None,
  project: str = None,
  python_function: GoogleCesToolPythonFunction = None,
  timeouts: GoogleCesToolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.toolId">tool_id</a></code> | <code>str</code> | The ID to use for the tool, which will become the final component of the tool's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.clientFunction">client_function</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunction">GoogleCesToolClientFunction</a></code> | client_function block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.dataStoreTool">data_store_tool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreTool">GoogleCesToolDataStoreTool</a></code> | data_store_tool block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.executionType">execution_type</a></code> | <code>str</code> | Possible values: SYNCHRONOUS ASYNCHRONOUS. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.googleSearchTool">google_search_tool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchTool">GoogleCesToolGoogleSearchTool</a></code> | google_search_tool block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#id GoogleCesTool#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#project GoogleCesTool#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.pythonFunction">python_function</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunction">GoogleCesToolPythonFunction</a></code> | python_function block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeouts">GoogleCesToolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.app"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#app GoogleCesTool#app}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#location GoogleCesTool#location}

---

##### `tool_id`<sup>Required</sup> <a name="tool_id" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.toolId"></a>

- *Type:* str

The ID to use for the tool, which will become the final component of the tool's resource name.

If not provided, a unique ID will be
automatically assigned for the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#tool_id GoogleCesTool#tool_id}

---

##### `client_function`<sup>Optional</sup> <a name="client_function" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.clientFunction"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunction">GoogleCesToolClientFunction</a>

client_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#client_function GoogleCesTool#client_function}

---

##### `data_store_tool`<sup>Optional</sup> <a name="data_store_tool" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.dataStoreTool"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreTool">GoogleCesToolDataStoreTool</a>

data_store_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#data_store_tool GoogleCesTool#data_store_tool}

---

##### `execution_type`<sup>Optional</sup> <a name="execution_type" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.executionType"></a>

- *Type:* str

Possible values: SYNCHRONOUS ASYNCHRONOUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#execution_type GoogleCesTool#execution_type}

---

##### `google_search_tool`<sup>Optional</sup> <a name="google_search_tool" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.googleSearchTool"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchTool">GoogleCesToolGoogleSearchTool</a>

google_search_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#google_search_tool GoogleCesTool#google_search_tool}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#id GoogleCesTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#project GoogleCesTool#project}.

---

##### `python_function`<sup>Optional</sup> <a name="python_function" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.pythonFunction"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunction">GoogleCesToolPythonFunction</a>

python_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#python_function GoogleCesTool#python_function}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeouts">GoogleCesToolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#timeouts GoogleCesTool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putClientFunction">put_client_function</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putDataStoreTool">put_data_store_tool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putGoogleSearchTool">put_google_search_tool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putPythonFunction">put_python_function</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.resetClientFunction">reset_client_function</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.resetDataStoreTool">reset_data_store_tool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.resetExecutionType">reset_execution_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.resetGoogleSearchTool">reset_google_search_tool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.resetPythonFunction">reset_python_function</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_client_function` <a name="put_client_function" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putClientFunction"></a>

```python
def put_client_function(
  name: str,
  description: str = None,
  parameters: GoogleCesToolClientFunctionParameters = None,
  response: GoogleCesToolClientFunctionResponse = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putClientFunction.parameter.name"></a>

- *Type:* str

The function name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#name GoogleCesTool#name}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putClientFunction.parameter.description"></a>

- *Type:* str

The function description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#description GoogleCesTool#description}

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putClientFunction.parameter.parameters"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters">GoogleCesToolClientFunctionParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#parameters GoogleCesTool#parameters}

---

###### `response`<sup>Optional</sup> <a name="response" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putClientFunction.parameter.response"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse">GoogleCesToolClientFunctionResponse</a>

response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#response GoogleCesTool#response}

---

##### `put_data_store_tool` <a name="put_data_store_tool" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putDataStoreTool"></a>

```python
def put_data_store_tool(
  name: str,
  boost_specs: IResolvable | typing.List[GoogleCesToolDataStoreToolBoostSpecs] = None,
  description: str = None,
  engine_source: GoogleCesToolDataStoreToolEngineSource = None,
  max_results: typing.Union[int, float] = None,
  modality_configs: IResolvable | typing.List[GoogleCesToolDataStoreToolModalityConfigs] = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putDataStoreTool.parameter.name"></a>

- *Type:* str

The data store tool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#name GoogleCesTool#name}

---

###### `boost_specs`<sup>Optional</sup> <a name="boost_specs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putDataStoreTool.parameter.boostSpecs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecs">GoogleCesToolDataStoreToolBoostSpecs</a>]

boost_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#boost_specs GoogleCesTool#boost_specs}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putDataStoreTool.parameter.description"></a>

- *Type:* str

The tool description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#description GoogleCesTool#description}

---

###### `engine_source`<sup>Optional</sup> <a name="engine_source" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putDataStoreTool.parameter.engineSource"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSource">GoogleCesToolDataStoreToolEngineSource</a>

engine_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#engine_source GoogleCesTool#engine_source}

---

###### `max_results`<sup>Optional</sup> <a name="max_results" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putDataStoreTool.parameter.maxResults"></a>

- *Type:* typing.Union[int, float]

Number of search results to return per query. The default value is 10. The maximum allowed value is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#max_results GoogleCesTool#max_results}

---

###### `modality_configs`<sup>Optional</sup> <a name="modality_configs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putDataStoreTool.parameter.modalityConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigs">GoogleCesToolDataStoreToolModalityConfigs</a>]

modality_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#modality_configs GoogleCesTool#modality_configs}

---

##### `put_google_search_tool` <a name="put_google_search_tool" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putGoogleSearchTool"></a>

```python
def put_google_search_tool(
  name: str,
  context_urls: typing.List[str] = None,
  description: str = None,
  exclude_domains: typing.List[str] = None,
  preferred_domains: typing.List[str] = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putGoogleSearchTool.parameter.name"></a>

- *Type:* str

The name of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#name GoogleCesTool#name}

---

###### `context_urls`<sup>Optional</sup> <a name="context_urls" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putGoogleSearchTool.parameter.contextUrls"></a>

- *Type:* typing.List[str]

Content will be fetched directly from these URLs for context and grounding.

More details: https://cloud.google.com/vertex-ai/generative-ai/docs/url-context.
Example: "https://example.com/path.html". A maximum of 20 URLs are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#context_urls GoogleCesTool#context_urls}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putGoogleSearchTool.parameter.description"></a>

- *Type:* str

Description of the tool's purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#description GoogleCesTool#description}

---

###### `exclude_domains`<sup>Optional</sup> <a name="exclude_domains" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putGoogleSearchTool.parameter.excludeDomains"></a>

- *Type:* typing.List[str]

List of domains to be excluded from the search results. Example: "example.com". A maximum of 2000 domains can be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#exclude_domains GoogleCesTool#exclude_domains}

---

###### `preferred_domains`<sup>Optional</sup> <a name="preferred_domains" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putGoogleSearchTool.parameter.preferredDomains"></a>

- *Type:* typing.List[str]

Specifies domain names to guide the search.

The model will be instructed to prioritize these domains
when formulating queries for google search.
This is a best-effort hint and these domains may or may
not be exclusively reflected in the final search results.
Example: "example.com", "another.site".
A maximum of 20 domains can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#preferred_domains GoogleCesTool#preferred_domains}

---

##### `put_python_function` <a name="put_python_function" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putPythonFunction"></a>

```python
def put_python_function(
  name: str = None,
  python_code: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putPythonFunction.parameter.name"></a>

- *Type:* str

The name of the Python function to execute.

Must match a Python function
name defined in the python code. Case sensitive. If the name is not
provided, the first function defined in the python code will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#name GoogleCesTool#name}

---

###### `python_code`<sup>Optional</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putPythonFunction.parameter.pythonCode"></a>

- *Type:* str

The Python code to execute for the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#python_code GoogleCesTool#python_code}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#create GoogleCesTool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#delete GoogleCesTool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#update GoogleCesTool#update}.

---

##### `reset_client_function` <a name="reset_client_function" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.resetClientFunction"></a>

```python
def reset_client_function() -> None
```

##### `reset_data_store_tool` <a name="reset_data_store_tool" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.resetDataStoreTool"></a>

```python
def reset_data_store_tool() -> None
```

##### `reset_execution_type` <a name="reset_execution_type" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.resetExecutionType"></a>

```python
def reset_execution_type() -> None
```

##### `reset_google_search_tool` <a name="reset_google_search_tool" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.resetGoogleSearchTool"></a>

```python
def reset_google_search_tool() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_python_function` <a name="reset_python_function" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.resetPythonFunction"></a>

```python
def reset_python_function() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleCesTool resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesTool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesTool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesTool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesTool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleCesTool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCesTool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCesTool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesTool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.clientFunction">client_function</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference">GoogleCesToolClientFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.dataStoreTool">data_store_tool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference">GoogleCesToolDataStoreToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.generatedSummary">generated_summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.googleSearchTool">google_search_tool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference">GoogleCesToolGoogleSearchToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.openApiTool">open_api_tool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList">GoogleCesToolOpenApiToolList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.pythonFunction">python_function</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference">GoogleCesToolPythonFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.systemTool">system_tool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList">GoogleCesToolSystemToolList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference">GoogleCesToolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.appInput">app_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.clientFunctionInput">client_function_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunction">GoogleCesToolClientFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.dataStoreToolInput">data_store_tool_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreTool">GoogleCesToolDataStoreTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.executionTypeInput">execution_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.googleSearchToolInput">google_search_tool_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchTool">GoogleCesToolGoogleSearchTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.pythonFunctionInput">python_function_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunction">GoogleCesToolPythonFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeouts">GoogleCesToolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.toolIdInput">tool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.app">app</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.executionType">execution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.toolId">tool_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `client_function`<sup>Required</sup> <a name="client_function" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.clientFunction"></a>

```python
client_function: GoogleCesToolClientFunctionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference">GoogleCesToolClientFunctionOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `data_store_tool`<sup>Required</sup> <a name="data_store_tool" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.dataStoreTool"></a>

```python
data_store_tool: GoogleCesToolDataStoreToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference">GoogleCesToolDataStoreToolOutputReference</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `generated_summary`<sup>Required</sup> <a name="generated_summary" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.generatedSummary"></a>

```python
generated_summary: str
```

- *Type:* str

---

##### `google_search_tool`<sup>Required</sup> <a name="google_search_tool" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.googleSearchTool"></a>

```python
google_search_tool: GoogleCesToolGoogleSearchToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference">GoogleCesToolGoogleSearchToolOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `open_api_tool`<sup>Required</sup> <a name="open_api_tool" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.openApiTool"></a>

```python
open_api_tool: GoogleCesToolOpenApiToolList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList">GoogleCesToolOpenApiToolList</a>

---

##### `python_function`<sup>Required</sup> <a name="python_function" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.pythonFunction"></a>

```python
python_function: GoogleCesToolPythonFunctionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference">GoogleCesToolPythonFunctionOutputReference</a>

---

##### `system_tool`<sup>Required</sup> <a name="system_tool" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.systemTool"></a>

```python
system_tool: GoogleCesToolSystemToolList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList">GoogleCesToolSystemToolList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.timeouts"></a>

```python
timeouts: GoogleCesToolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference">GoogleCesToolTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `app_input`<sup>Optional</sup> <a name="app_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.appInput"></a>

```python
app_input: str
```

- *Type:* str

---

##### `client_function_input`<sup>Optional</sup> <a name="client_function_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.clientFunctionInput"></a>

```python
client_function_input: GoogleCesToolClientFunction
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunction">GoogleCesToolClientFunction</a>

---

##### `data_store_tool_input`<sup>Optional</sup> <a name="data_store_tool_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.dataStoreToolInput"></a>

```python
data_store_tool_input: GoogleCesToolDataStoreTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreTool">GoogleCesToolDataStoreTool</a>

---

##### `execution_type_input`<sup>Optional</sup> <a name="execution_type_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.executionTypeInput"></a>

```python
execution_type_input: str
```

- *Type:* str

---

##### `google_search_tool_input`<sup>Optional</sup> <a name="google_search_tool_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.googleSearchToolInput"></a>

```python
google_search_tool_input: GoogleCesToolGoogleSearchTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchTool">GoogleCesToolGoogleSearchTool</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `python_function_input`<sup>Optional</sup> <a name="python_function_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.pythonFunctionInput"></a>

```python
python_function_input: GoogleCesToolPythonFunction
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunction">GoogleCesToolPythonFunction</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleCesToolTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeouts">GoogleCesToolTimeouts</a>

---

##### `tool_id_input`<sup>Optional</sup> <a name="tool_id_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.toolIdInput"></a>

```python
tool_id_input: str
```

- *Type:* str

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.app"></a>

```python
app: str
```

- *Type:* str

---

##### `execution_type`<sup>Required</sup> <a name="execution_type" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.executionType"></a>

```python
execution_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `tool_id`<sup>Required</sup> <a name="tool_id" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.toolId"></a>

```python
tool_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesTool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesToolClientFunction <a name="GoogleCesToolClientFunction" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunction.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolClientFunction(
  name: str,
  description: str = None,
  parameters: GoogleCesToolClientFunctionParameters = None,
  response: GoogleCesToolClientFunctionResponse = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunction.property.name">name</a></code> | <code>str</code> | The function name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunction.property.description">description</a></code> | <code>str</code> | The function description. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunction.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters">GoogleCesToolClientFunctionParameters</a></code> | parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunction.property.response">response</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse">GoogleCesToolClientFunctionResponse</a></code> | response block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunction.property.name"></a>

```python
name: str
```

- *Type:* str

The function name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#name GoogleCesTool#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunction.property.description"></a>

```python
description: str
```

- *Type:* str

The function description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#description GoogleCesTool#description}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunction.property.parameters"></a>

```python
parameters: GoogleCesToolClientFunctionParameters
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters">GoogleCesToolClientFunctionParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#parameters GoogleCesTool#parameters}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunction.property.response"></a>

```python
response: GoogleCesToolClientFunctionResponse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse">GoogleCesToolClientFunctionResponse</a>

response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#response GoogleCesTool#response}

---

### GoogleCesToolClientFunctionParameters <a name="GoogleCesToolClientFunctionParameters" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolClientFunctionParameters(
  type: str,
  additional_properties: str = None,
  any_of: str = None,
  default: str = None,
  defs: str = None,
  description: str = None,
  enum: typing.List[str] = None,
  items: str = None,
  maximum: typing.Union[int, float] = None,
  max_items: typing.Union[int, float] = None,
  minimum: typing.Union[int, float] = None,
  min_items: typing.Union[int, float] = None,
  nullable: bool | IResolvable = None,
  prefix_items: str = None,
  properties: str = None,
  ref: str = None,
  required: typing.List[str] = None,
  title: str = None,
  unique_items: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.type">type</a></code> | <code>str</code> | The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.additionalProperties">additional_properties</a></code> | <code>str</code> | Defines the schema for additional properties allowed in an object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.anyOf">any_of</a></code> | <code>str</code> | The instance value should be valid against at least one of the schemas in this list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.default">default</a></code> | <code>str</code> | Default value of the data. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.defs">defs</a></code> | <code>str</code> | A map of definitions for use by ref. Only allowed at the root of the schema. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.description">description</a></code> | <code>str</code> | The description of the data. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.enum">enum</a></code> | <code>typing.List[str]</code> | Possible values of the element of primitive type with enum format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.items">items</a></code> | <code>str</code> | Schema of the elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.maximum">maximum</a></code> | <code>typing.Union[int, float]</code> | Maximum value for Type.INTEGER and Type.NUMBER. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Maximum number of the elements for Type.ARRAY. (int64 format). |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.minimum">minimum</a></code> | <code>typing.Union[int, float]</code> | Minimum value for Type.INTEGER and Type.NUMBER. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.minItems">min_items</a></code> | <code>typing.Union[int, float]</code> | Minimum number of the elements for Type.ARRAY. (int64 format). |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.nullable">nullable</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates if the value may be null. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.prefixItems">prefix_items</a></code> | <code>str</code> | Schemas of initial elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.properties">properties</a></code> | <code>str</code> | Properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.ref">ref</a></code> | <code>str</code> | Allows indirect references between schema nodes. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.required">required</a></code> | <code>typing.List[str]</code> | Required properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.title">title</a></code> | <code>str</code> | The title of the schema. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.uniqueItems">unique_items</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicate the items in the array must be unique. Only applies to TYPE.ARRAY. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#type GoogleCesTool#type}

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.additionalProperties"></a>

```python
additional_properties: str
```

- *Type:* str

Defines the schema for additional properties allowed in an object.

The value must be a valid JSON string representing the Schema object.
(Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#additional_properties GoogleCesTool#additional_properties}

---

##### `any_of`<sup>Optional</sup> <a name="any_of" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.anyOf"></a>

```python
any_of: str
```

- *Type:* str

The instance value should be valid against at least one of the schemas in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#any_of GoogleCesTool#any_of}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.default"></a>

```python
default: str
```

- *Type:* str

Default value of the data.

Represents a dynamically typed value
which can be either null, a number, a string, a boolean, a struct,
or a list of values. The provided default value must be compatible
with the defined 'type' and other schema constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#default GoogleCesTool#default}

---

##### `defs`<sup>Optional</sup> <a name="defs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.defs"></a>

```python
defs: str
```

- *Type:* str

A map of definitions for use by ref. Only allowed at the root of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#defs GoogleCesTool#defs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#description GoogleCesTool#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.enum"></a>

```python
enum: typing.List[str]
```

- *Type:* typing.List[str]

Possible values of the element of primitive type with enum format.

Examples:

1. We can define direction as :
   {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
2. We can define apartment number as :
   {type:INTEGER, format:enum, enum:["101", "201", "301"]}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#enum GoogleCesTool#enum}

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.items"></a>

```python
items: str
```

- *Type:* str

Schema of the elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#items GoogleCesTool#items}

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.maximum"></a>

```python
maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#maximum GoogleCesTool#maximum}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#max_items GoogleCesTool#max_items}

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.minimum"></a>

```python
minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#minimum GoogleCesTool#minimum}

---

##### `min_items`<sup>Optional</sup> <a name="min_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.minItems"></a>

```python
min_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#min_items GoogleCesTool#min_items}

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.nullable"></a>

```python
nullable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates if the value may be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#nullable GoogleCesTool#nullable}

---

##### `prefix_items`<sup>Optional</sup> <a name="prefix_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.prefixItems"></a>

```python
prefix_items: str
```

- *Type:* str

Schemas of initial elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#prefix_items GoogleCesTool#prefix_items}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.properties"></a>

```python
properties: str
```

- *Type:* str

Properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#properties GoogleCesTool#properties}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.ref"></a>

```python
ref: str
```

- *Type:* str

Allows indirect references between schema nodes.

The value should be a
valid reference to a child of the root 'defs'.
For example, the following schema defines a reference to a schema node
named "Pet":
type: object
properties:
pet:
ref: #/defs/Pet
defs:
Pet:
type: object
properties:
name:
type: string
The value of the "pet" property is a reference to the schema node
named "Pet".
See details in
https://json-schema.org/understanding-json-schema/structuring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#ref GoogleCesTool#ref}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.required"></a>

```python
required: typing.List[str]
```

- *Type:* typing.List[str]

Required properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#required GoogleCesTool#required}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.title"></a>

```python
title: str
```

- *Type:* str

The title of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#title GoogleCesTool#title}

---

##### `unique_items`<sup>Optional</sup> <a name="unique_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters.property.uniqueItems"></a>

```python
unique_items: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#unique_items GoogleCesTool#unique_items}

---

### GoogleCesToolClientFunctionResponse <a name="GoogleCesToolClientFunctionResponse" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolClientFunctionResponse(
  type: str,
  additional_properties: str = None,
  any_of: str = None,
  default: str = None,
  defs: str = None,
  description: str = None,
  enum: typing.List[str] = None,
  items: str = None,
  maximum: typing.Union[int, float] = None,
  max_items: typing.Union[int, float] = None,
  minimum: typing.Union[int, float] = None,
  min_items: typing.Union[int, float] = None,
  nullable: bool | IResolvable = None,
  prefix_items: str = None,
  properties: str = None,
  ref: str = None,
  required: typing.List[str] = None,
  title: str = None,
  unique_items: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.type">type</a></code> | <code>str</code> | The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.additionalProperties">additional_properties</a></code> | <code>str</code> | Defines the schema for additional properties allowed in an object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.anyOf">any_of</a></code> | <code>str</code> | The instance value should be valid against at least one of the schemas in this list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.default">default</a></code> | <code>str</code> | Default value of the data. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.defs">defs</a></code> | <code>str</code> | A map of definitions for use by ref. Only allowed at the root of the schema. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.description">description</a></code> | <code>str</code> | The description of the data. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.enum">enum</a></code> | <code>typing.List[str]</code> | Possible values of the element of primitive type with enum format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.items">items</a></code> | <code>str</code> | Schema of the elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.maximum">maximum</a></code> | <code>typing.Union[int, float]</code> | Maximum value for Type.INTEGER and Type.NUMBER. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Maximum number of the elements for Type.ARRAY. (int64 format). |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.minimum">minimum</a></code> | <code>typing.Union[int, float]</code> | Minimum value for Type.INTEGER and Type.NUMBER. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.minItems">min_items</a></code> | <code>typing.Union[int, float]</code> | Minimum number of the elements for Type.ARRAY. (int64 format). |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.nullable">nullable</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates if the value may be null. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.prefixItems">prefix_items</a></code> | <code>str</code> | Schemas of initial elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.properties">properties</a></code> | <code>str</code> | Properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.ref">ref</a></code> | <code>str</code> | Allows indirect references between schema nodes. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.required">required</a></code> | <code>typing.List[str]</code> | Required properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.title">title</a></code> | <code>str</code> | The title of the schema. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.uniqueItems">unique_items</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicate the items in the array must be unique. Only applies to TYPE.ARRAY. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#type GoogleCesTool#type}

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.additionalProperties"></a>

```python
additional_properties: str
```

- *Type:* str

Defines the schema for additional properties allowed in an object.

The value must be a valid JSON string representing the Schema object.
(Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#additional_properties GoogleCesTool#additional_properties}

---

##### `any_of`<sup>Optional</sup> <a name="any_of" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.anyOf"></a>

```python
any_of: str
```

- *Type:* str

The instance value should be valid against at least one of the schemas in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#any_of GoogleCesTool#any_of}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.default"></a>

```python
default: str
```

- *Type:* str

Default value of the data.

Represents a dynamically typed value
which can be either null, a number, a string, a boolean, a struct,
or a list of values. The provided default value must be compatible
with the defined 'type' and other schema constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#default GoogleCesTool#default}

---

##### `defs`<sup>Optional</sup> <a name="defs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.defs"></a>

```python
defs: str
```

- *Type:* str

A map of definitions for use by ref. Only allowed at the root of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#defs GoogleCesTool#defs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#description GoogleCesTool#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.enum"></a>

```python
enum: typing.List[str]
```

- *Type:* typing.List[str]

Possible values of the element of primitive type with enum format.

Examples:

1. We can define direction as :
   {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
2. We can define apartment number as :
   {type:INTEGER, format:enum, enum:["101", "201", "301"]}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#enum GoogleCesTool#enum}

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.items"></a>

```python
items: str
```

- *Type:* str

Schema of the elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#items GoogleCesTool#items}

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.maximum"></a>

```python
maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#maximum GoogleCesTool#maximum}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#max_items GoogleCesTool#max_items}

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.minimum"></a>

```python
minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#minimum GoogleCesTool#minimum}

---

##### `min_items`<sup>Optional</sup> <a name="min_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.minItems"></a>

```python
min_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#min_items GoogleCesTool#min_items}

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.nullable"></a>

```python
nullable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates if the value may be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#nullable GoogleCesTool#nullable}

---

##### `prefix_items`<sup>Optional</sup> <a name="prefix_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.prefixItems"></a>

```python
prefix_items: str
```

- *Type:* str

Schemas of initial elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#prefix_items GoogleCesTool#prefix_items}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.properties"></a>

```python
properties: str
```

- *Type:* str

Properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#properties GoogleCesTool#properties}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.ref"></a>

```python
ref: str
```

- *Type:* str

Allows indirect references between schema nodes.

The value should be a
valid reference to a child of the root 'defs'.
For example, the following schema defines a reference to a schema node
named "Pet":
type: object
properties:
pet:
ref: #/defs/Pet
defs:
Pet:
type: object
properties:
name:
type: string
The value of the "pet" property is a reference to the schema node
named "Pet".
See details in
https://json-schema.org/understanding-json-schema/structuring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#ref GoogleCesTool#ref}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.required"></a>

```python
required: typing.List[str]
```

- *Type:* typing.List[str]

Required properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#required GoogleCesTool#required}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.title"></a>

```python
title: str
```

- *Type:* str

The title of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#title GoogleCesTool#title}

---

##### `unique_items`<sup>Optional</sup> <a name="unique_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse.property.uniqueItems"></a>

```python
unique_items: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#unique_items GoogleCesTool#unique_items}

---

### GoogleCesToolConfig <a name="GoogleCesToolConfig" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app: str,
  location: str,
  tool_id: str,
  client_function: GoogleCesToolClientFunction = None,
  data_store_tool: GoogleCesToolDataStoreTool = None,
  execution_type: str = None,
  google_search_tool: GoogleCesToolGoogleSearchTool = None,
  id: str = None,
  project: str = None,
  python_function: GoogleCesToolPythonFunction = None,
  timeouts: GoogleCesToolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.toolId">tool_id</a></code> | <code>str</code> | The ID to use for the tool, which will become the final component of the tool's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.clientFunction">client_function</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunction">GoogleCesToolClientFunction</a></code> | client_function block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.dataStoreTool">data_store_tool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreTool">GoogleCesToolDataStoreTool</a></code> | data_store_tool block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.executionType">execution_type</a></code> | <code>str</code> | Possible values: SYNCHRONOUS ASYNCHRONOUS. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.googleSearchTool">google_search_tool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchTool">GoogleCesToolGoogleSearchTool</a></code> | google_search_tool block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#id GoogleCesTool#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#project GoogleCesTool#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.pythonFunction">python_function</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunction">GoogleCesToolPythonFunction</a></code> | python_function block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeouts">GoogleCesToolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.app"></a>

```python
app: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#app GoogleCesTool#app}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#location GoogleCesTool#location}

---

##### `tool_id`<sup>Required</sup> <a name="tool_id" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.toolId"></a>

```python
tool_id: str
```

- *Type:* str

The ID to use for the tool, which will become the final component of the tool's resource name.

If not provided, a unique ID will be
automatically assigned for the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#tool_id GoogleCesTool#tool_id}

---

##### `client_function`<sup>Optional</sup> <a name="client_function" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.clientFunction"></a>

```python
client_function: GoogleCesToolClientFunction
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunction">GoogleCesToolClientFunction</a>

client_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#client_function GoogleCesTool#client_function}

---

##### `data_store_tool`<sup>Optional</sup> <a name="data_store_tool" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.dataStoreTool"></a>

```python
data_store_tool: GoogleCesToolDataStoreTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreTool">GoogleCesToolDataStoreTool</a>

data_store_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#data_store_tool GoogleCesTool#data_store_tool}

---

##### `execution_type`<sup>Optional</sup> <a name="execution_type" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.executionType"></a>

```python
execution_type: str
```

- *Type:* str

Possible values: SYNCHRONOUS ASYNCHRONOUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#execution_type GoogleCesTool#execution_type}

---

##### `google_search_tool`<sup>Optional</sup> <a name="google_search_tool" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.googleSearchTool"></a>

```python
google_search_tool: GoogleCesToolGoogleSearchTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchTool">GoogleCesToolGoogleSearchTool</a>

google_search_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#google_search_tool GoogleCesTool#google_search_tool}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#id GoogleCesTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#project GoogleCesTool#project}.

---

##### `python_function`<sup>Optional</sup> <a name="python_function" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.pythonFunction"></a>

```python
python_function: GoogleCesToolPythonFunction
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunction">GoogleCesToolPythonFunction</a>

python_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#python_function GoogleCesTool#python_function}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolConfig.property.timeouts"></a>

```python
timeouts: GoogleCesToolTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeouts">GoogleCesToolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#timeouts GoogleCesTool#timeouts}

---

### GoogleCesToolDataStoreTool <a name="GoogleCesToolDataStoreTool" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreTool.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreTool(
  name: str,
  boost_specs: IResolvable | typing.List[GoogleCesToolDataStoreToolBoostSpecs] = None,
  description: str = None,
  engine_source: GoogleCesToolDataStoreToolEngineSource = None,
  max_results: typing.Union[int, float] = None,
  modality_configs: IResolvable | typing.List[GoogleCesToolDataStoreToolModalityConfigs] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreTool.property.name">name</a></code> | <code>str</code> | The data store tool name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreTool.property.boostSpecs">boost_specs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecs">GoogleCesToolDataStoreToolBoostSpecs</a>]</code> | boost_specs block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreTool.property.description">description</a></code> | <code>str</code> | The tool description. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreTool.property.engineSource">engine_source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSource">GoogleCesToolDataStoreToolEngineSource</a></code> | engine_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreTool.property.maxResults">max_results</a></code> | <code>typing.Union[int, float]</code> | Number of search results to return per query. The default value is 10. The maximum allowed value is 10. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreTool.property.modalityConfigs">modality_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigs">GoogleCesToolDataStoreToolModalityConfigs</a>]</code> | modality_configs block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreTool.property.name"></a>

```python
name: str
```

- *Type:* str

The data store tool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#name GoogleCesTool#name}

---

##### `boost_specs`<sup>Optional</sup> <a name="boost_specs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreTool.property.boostSpecs"></a>

```python
boost_specs: IResolvable | typing.List[GoogleCesToolDataStoreToolBoostSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecs">GoogleCesToolDataStoreToolBoostSpecs</a>]

boost_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#boost_specs GoogleCesTool#boost_specs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreTool.property.description"></a>

```python
description: str
```

- *Type:* str

The tool description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#description GoogleCesTool#description}

---

##### `engine_source`<sup>Optional</sup> <a name="engine_source" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreTool.property.engineSource"></a>

```python
engine_source: GoogleCesToolDataStoreToolEngineSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSource">GoogleCesToolDataStoreToolEngineSource</a>

engine_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#engine_source GoogleCesTool#engine_source}

---

##### `max_results`<sup>Optional</sup> <a name="max_results" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreTool.property.maxResults"></a>

```python
max_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of search results to return per query. The default value is 10. The maximum allowed value is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#max_results GoogleCesTool#max_results}

---

##### `modality_configs`<sup>Optional</sup> <a name="modality_configs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreTool.property.modalityConfigs"></a>

```python
modality_configs: IResolvable | typing.List[GoogleCesToolDataStoreToolModalityConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigs">GoogleCesToolDataStoreToolModalityConfigs</a>]

modality_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#modality_configs GoogleCesTool#modality_configs}

---

### GoogleCesToolDataStoreToolBoostSpecs <a name="GoogleCesToolDataStoreToolBoostSpecs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecs.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolBoostSpecs(
  data_stores: typing.List[str],
  spec: IResolvable | typing.List[GoogleCesToolDataStoreToolBoostSpecsSpec]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecs.property.dataStores">data_stores</a></code> | <code>typing.List[str]</code> | The Data Store where the boosting configuration is applied. Full resource name of DataStore, such as projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecs.property.spec">spec</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpec">GoogleCesToolDataStoreToolBoostSpecsSpec</a>]</code> | spec block. |

---

##### `data_stores`<sup>Required</sup> <a name="data_stores" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecs.property.dataStores"></a>

```python
data_stores: typing.List[str]
```

- *Type:* typing.List[str]

The Data Store where the boosting configuration is applied. Full resource name of DataStore, such as projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#data_stores GoogleCesTool#data_stores}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecs.property.spec"></a>

```python
spec: IResolvable | typing.List[GoogleCesToolDataStoreToolBoostSpecsSpec]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpec">GoogleCesToolDataStoreToolBoostSpecsSpec</a>]

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#spec GoogleCesTool#spec}

---

### GoogleCesToolDataStoreToolBoostSpecsSpec <a name="GoogleCesToolDataStoreToolBoostSpecsSpec" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpec(
  condition_boost_specs: IResolvable | typing.List[GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpec.property.conditionBoostSpecs">condition_boost_specs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>]</code> | condition_boost_specs block. |

---

##### `condition_boost_specs`<sup>Required</sup> <a name="condition_boost_specs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpec.property.conditionBoostSpecs"></a>

```python
condition_boost_specs: IResolvable | typing.List[GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>]

condition_boost_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#condition_boost_specs GoogleCesTool#condition_boost_specs}

---

### GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs <a name="GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs(
  condition: str,
  boost: typing.Union[int, float] = None,
  boost_control_spec: GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.condition">condition</a></code> | <code>str</code> | An expression which specifies a boost condition. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.boost">boost</a></code> | <code>typing.Union[int, float]</code> | Strength of the boost, which should be in [-1, 1]. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.boostControlSpec">boost_control_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a></code> | boost_control_spec block. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.condition"></a>

```python
condition: str
```

- *Type:* str

An expression which specifies a boost condition.

The syntax is the same
as filter expression syntax. Currently, the only supported condition is
a list of BCP-47 lang codes.
Example: To boost suggestions in languages en or fr:
(lang_code: ANY("en", "fr"))

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#condition GoogleCesTool#condition}

---

##### `boost`<sup>Optional</sup> <a name="boost" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.boost"></a>

```python
boost: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Strength of the boost, which should be in [-1, 1].

Negative boost means
demotion. Default is 0.0.
Setting to 1.0 gives the suggestions a big promotion. However, it does
not necessarily mean that the top result will be a boosted suggestion.
Setting to -1.0 gives the suggestions a big demotion. However, other
suggestions that are relevant might still be shown.
Setting to 0.0 means no boost applied. The boosting condition is
ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#boost GoogleCesTool#boost}

---

##### `boost_control_spec`<sup>Optional</sup> <a name="boost_control_spec" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.boostControlSpec"></a>

```python
boost_control_spec: GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a>

boost_control_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#boost_control_spec GoogleCesTool#boost_control_spec}

---

### GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec <a name="GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec(
  attribute_type: str = None,
  control_points: IResolvable | typing.List[GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints] = None,
  field_name: str = None,
  interpolation_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.attributeType">attribute_type</a></code> | <code>str</code> | The attribute type to be used to determine the boost amount. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.controlPoints">control_points</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>]</code> | control_points block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.fieldName">field_name</a></code> | <code>str</code> | The name of the field whose value will be used to determine the boost amount. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.interpolationType">interpolation_type</a></code> | <code>str</code> | The interpolation type to be applied to connect the control points listed below. Possible values: LINEAR. |

---

##### `attribute_type`<sup>Optional</sup> <a name="attribute_type" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.attributeType"></a>

```python
attribute_type: str
```

- *Type:* str

The attribute type to be used to determine the boost amount.

The
attribute value can be derived from the field value of the specified
field_name. In the case of numerical it is straightforward i.e.
attribute_value = numerical_field_value. In the case of freshness
however, attribute_value = (time.now() - datetime_field_value).
Possible values:
NUMERICAL
FRESHNESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#attribute_type GoogleCesTool#attribute_type}

---

##### `control_points`<sup>Optional</sup> <a name="control_points" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.controlPoints"></a>

```python
control_points: IResolvable | typing.List[GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>]

control_points block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#control_points GoogleCesTool#control_points}

---

##### `field_name`<sup>Optional</sup> <a name="field_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

The name of the field whose value will be used to determine the boost amount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#field_name GoogleCesTool#field_name}

---

##### `interpolation_type`<sup>Optional</sup> <a name="interpolation_type" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.interpolationType"></a>

```python
interpolation_type: str
```

- *Type:* str

The interpolation type to be applied to connect the control points listed below. Possible values: LINEAR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#interpolation_type GoogleCesTool#interpolation_type}

---

### GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints <a name="GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints(
  attribute_value: str = None,
  boost_amount: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints.property.attributeValue">attribute_value</a></code> | <code>str</code> | Can be one of: 1. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints.property.boostAmount">boost_amount</a></code> | <code>typing.Union[int, float]</code> | The value between -1 to 1 by which to boost the score if the attribute_value evaluates to the value specified above. |

---

##### `attribute_value`<sup>Optional</sup> <a name="attribute_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

Can be one of: 1.

The numerical field value.
2. The duration spec for freshness:
The value must be formatted as an XSD 'dayTimeDuration' value (a
restricted subset of an ISO 8601 duration value). The pattern for
this is: 'nDnM]'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#attribute_value GoogleCesTool#attribute_value}

---

##### `boost_amount`<sup>Optional</sup> <a name="boost_amount" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints.property.boostAmount"></a>

```python
boost_amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value between -1 to 1 by which to boost the score if the attribute_value evaluates to the value specified above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#boost_amount GoogleCesTool#boost_amount}

---

### GoogleCesToolDataStoreToolEngineSource <a name="GoogleCesToolDataStoreToolEngineSource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSource.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolEngineSource(
  engine: str,
  data_store_sources: IResolvable | typing.List[GoogleCesToolDataStoreToolEngineSourceDataStoreSources] = None,
  filter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSource.property.engine">engine</a></code> | <code>str</code> | Full resource name of the Engine. Format: 'projects/{project}/locations/{location}/collections/{collection}/engines/{engine}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSource.property.dataStoreSources">data_store_sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSources">GoogleCesToolDataStoreToolEngineSourceDataStoreSources</a>]</code> | data_store_sources block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSource.property.filter">filter</a></code> | <code>str</code> | A filter applied to the search across the Engine. Not relevant and not used if 'data_store_sources' is provided. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata. |

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSource.property.engine"></a>

```python
engine: str
```

- *Type:* str

Full resource name of the Engine. Format: 'projects/{project}/locations/{location}/collections/{collection}/engines/{engine}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#engine GoogleCesTool#engine}

---

##### `data_store_sources`<sup>Optional</sup> <a name="data_store_sources" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSource.property.dataStoreSources"></a>

```python
data_store_sources: IResolvable | typing.List[GoogleCesToolDataStoreToolEngineSourceDataStoreSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSources">GoogleCesToolDataStoreToolEngineSourceDataStoreSources</a>]

data_store_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#data_store_sources GoogleCesTool#data_store_sources}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSource.property.filter"></a>

```python
filter: str
```

- *Type:* str

A filter applied to the search across the Engine. Not relevant and not used if 'data_store_sources' is provided. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#filter GoogleCesTool#filter}

---

### GoogleCesToolDataStoreToolEngineSourceDataStoreSources <a name="GoogleCesToolDataStoreToolEngineSourceDataStoreSources" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSources.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSources(
  data_store: GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore = None,
  filter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSources.property.dataStore">data_store</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a></code> | data_store block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSources.property.filter">filter</a></code> | <code>str</code> | Filter specification for the DataStore. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata. |

---

##### `data_store`<sup>Optional</sup> <a name="data_store" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSources.property.dataStore"></a>

```python
data_store: GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a>

data_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#data_store GoogleCesTool#data_store}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSources.property.filter"></a>

```python
filter: str
```

- *Type:* str

Filter specification for the DataStore. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#filter GoogleCesTool#filter}

---

### GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore <a name="GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore.property.name">name</a></code> | <code>str</code> | Full resource name of the DataStore. Format: 'projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}'. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore.property.name"></a>

```python
name: str
```

- *Type:* str

Full resource name of the DataStore. Format: 'projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#name GoogleCesTool#name}

---

### GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig <a name="GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig()
```


### GoogleCesToolDataStoreToolModalityConfigs <a name="GoogleCesToolDataStoreToolModalityConfigs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigs.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolModalityConfigs(
  modality_type: str,
  grounding_config: GoogleCesToolDataStoreToolModalityConfigsGroundingConfig = None,
  rewriter_config: GoogleCesToolDataStoreToolModalityConfigsRewriterConfig = None,
  summarization_config: GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigs.property.modalityType">modality_type</a></code> | <code>str</code> | The modality type. Possible values: TEXT AUDIO. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigs.property.groundingConfig">grounding_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfig">GoogleCesToolDataStoreToolModalityConfigsGroundingConfig</a></code> | grounding_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigs.property.rewriterConfig">rewriter_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfig">GoogleCesToolDataStoreToolModalityConfigsRewriterConfig</a></code> | rewriter_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigs.property.summarizationConfig">summarization_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig">GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig</a></code> | summarization_config block. |

---

##### `modality_type`<sup>Required</sup> <a name="modality_type" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigs.property.modalityType"></a>

```python
modality_type: str
```

- *Type:* str

The modality type. Possible values: TEXT AUDIO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#modality_type GoogleCesTool#modality_type}

---

##### `grounding_config`<sup>Optional</sup> <a name="grounding_config" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigs.property.groundingConfig"></a>

```python
grounding_config: GoogleCesToolDataStoreToolModalityConfigsGroundingConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfig">GoogleCesToolDataStoreToolModalityConfigsGroundingConfig</a>

grounding_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#grounding_config GoogleCesTool#grounding_config}

---

##### `rewriter_config`<sup>Optional</sup> <a name="rewriter_config" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigs.property.rewriterConfig"></a>

```python
rewriter_config: GoogleCesToolDataStoreToolModalityConfigsRewriterConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfig">GoogleCesToolDataStoreToolModalityConfigsRewriterConfig</a>

rewriter_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#rewriter_config GoogleCesTool#rewriter_config}

---

##### `summarization_config`<sup>Optional</sup> <a name="summarization_config" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigs.property.summarizationConfig"></a>

```python
summarization_config: GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig">GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig</a>

summarization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#summarization_config GoogleCesTool#summarization_config}

---

### GoogleCesToolDataStoreToolModalityConfigsGroundingConfig <a name="GoogleCesToolDataStoreToolModalityConfigsGroundingConfig" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfig(
  disabled: bool | IResolvable = None,
  grounding_level: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfig.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether grounding is disabled. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfig.property.groundingLevel">grounding_level</a></code> | <code>typing.Union[int, float]</code> | The groundedness threshold of the answer based on the retrieved sources. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfig.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether grounding is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#disabled GoogleCesTool#disabled}

---

##### `grounding_level`<sup>Optional</sup> <a name="grounding_level" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfig.property.groundingLevel"></a>

```python
grounding_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The groundedness threshold of the answer based on the retrieved sources.

The value has a configurable range of [1, 5]. The level is used to
threshold the groundedness of the answer, meaning that all responses with
a groundedness score below the threshold will fall back to returning
relevant snippets only.
For example, a level of 3 means that the groundedness score must be
3 or higher for the response to be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#grounding_level GoogleCesTool#grounding_level}

---

### GoogleCesToolDataStoreToolModalityConfigsRewriterConfig <a name="GoogleCesToolDataStoreToolModalityConfigsRewriterConfig" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfig(
  model_settings: GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings,
  disabled: bool | IResolvable = None,
  prompt: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfig.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfig.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the rewriter is disabled. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfig.property.prompt">prompt</a></code> | <code>str</code> | The prompt definition. If not set, default prompt will be used. |

---

##### `model_settings`<sup>Required</sup> <a name="model_settings" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfig.property.modelSettings"></a>

```python
model_settings: GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#model_settings GoogleCesTool#model_settings}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfig.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the rewriter is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#disabled GoogleCesTool#disabled}

---

##### `prompt`<sup>Optional</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfig.property.prompt"></a>

```python
prompt: str
```

- *Type:* str

The prompt definition. If not set, default prompt will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#prompt GoogleCesTool#prompt}

---

### GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings <a name="GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings(
  model: str = None,
  temperature: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings.property.model">model</a></code> | <code>str</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings.property.model"></a>

```python
model: str
```

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#model GoogleCesTool#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#temperature GoogleCesTool#temperature}

---

### GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig <a name="GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig(
  disabled: bool | IResolvable = None,
  model_settings: GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings = None,
  prompt: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether summarization is disabled. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig.property.prompt">prompt</a></code> | <code>str</code> | The prompt definition. If not set, default prompt will be used. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether summarization is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#disabled GoogleCesTool#disabled}

---

##### `model_settings`<sup>Optional</sup> <a name="model_settings" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig.property.modelSettings"></a>

```python
model_settings: GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#model_settings GoogleCesTool#model_settings}

---

##### `prompt`<sup>Optional</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig.property.prompt"></a>

```python
prompt: str
```

- *Type:* str

The prompt definition. If not set, default prompt will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#prompt GoogleCesTool#prompt}

---

### GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings <a name="GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings(
  model: str = None,
  temperature: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings.property.model">model</a></code> | <code>str</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings.property.model"></a>

```python
model: str
```

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#model GoogleCesTool#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#temperature GoogleCesTool#temperature}

---

### GoogleCesToolGoogleSearchTool <a name="GoogleCesToolGoogleSearchTool" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchTool.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolGoogleSearchTool(
  name: str,
  context_urls: typing.List[str] = None,
  description: str = None,
  exclude_domains: typing.List[str] = None,
  preferred_domains: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchTool.property.name">name</a></code> | <code>str</code> | The name of the tool. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchTool.property.contextUrls">context_urls</a></code> | <code>typing.List[str]</code> | Content will be fetched directly from these URLs for context and grounding. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchTool.property.description">description</a></code> | <code>str</code> | Description of the tool's purpose. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchTool.property.excludeDomains">exclude_domains</a></code> | <code>typing.List[str]</code> | List of domains to be excluded from the search results. Example: "example.com". A maximum of 2000 domains can be excluded. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchTool.property.preferredDomains">preferred_domains</a></code> | <code>typing.List[str]</code> | Specifies domain names to guide the search. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchTool.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#name GoogleCesTool#name}

---

##### `context_urls`<sup>Optional</sup> <a name="context_urls" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchTool.property.contextUrls"></a>

```python
context_urls: typing.List[str]
```

- *Type:* typing.List[str]

Content will be fetched directly from these URLs for context and grounding.

More details: https://cloud.google.com/vertex-ai/generative-ai/docs/url-context.
Example: "https://example.com/path.html". A maximum of 20 URLs are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#context_urls GoogleCesTool#context_urls}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchTool.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the tool's purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#description GoogleCesTool#description}

---

##### `exclude_domains`<sup>Optional</sup> <a name="exclude_domains" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchTool.property.excludeDomains"></a>

```python
exclude_domains: typing.List[str]
```

- *Type:* typing.List[str]

List of domains to be excluded from the search results. Example: "example.com". A maximum of 2000 domains can be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#exclude_domains GoogleCesTool#exclude_domains}

---

##### `preferred_domains`<sup>Optional</sup> <a name="preferred_domains" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchTool.property.preferredDomains"></a>

```python
preferred_domains: typing.List[str]
```

- *Type:* typing.List[str]

Specifies domain names to guide the search.

The model will be instructed to prioritize these domains
when formulating queries for google search.
This is a best-effort hint and these domains may or may
not be exclusively reflected in the final search results.
Example: "example.com", "another.site".
A maximum of 20 domains can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#preferred_domains GoogleCesTool#preferred_domains}

---

### GoogleCesToolOpenApiTool <a name="GoogleCesToolOpenApiTool" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiTool.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiTool()
```


### GoogleCesToolOpenApiToolApiAuthentication <a name="GoogleCesToolOpenApiToolApiAuthentication" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthentication.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolApiAuthentication()
```


### GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfig <a name="GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfig" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfig()
```


### GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfig <a name="GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfig()
```


### GoogleCesToolOpenApiToolApiAuthenticationOauthConfig <a name="GoogleCesToolOpenApiToolApiAuthenticationOauthConfig" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfig()
```


### GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig <a name="GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig()
```


### GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig <a name="GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig()
```


### GoogleCesToolOpenApiToolServiceDirectoryConfig <a name="GoogleCesToolOpenApiToolServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfig()
```


### GoogleCesToolOpenApiToolTlsConfig <a name="GoogleCesToolOpenApiToolTlsConfig" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolTlsConfig()
```


### GoogleCesToolOpenApiToolTlsConfigCaCerts <a name="GoogleCesToolOpenApiToolTlsConfigCaCerts" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCerts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCerts()
```


### GoogleCesToolPythonFunction <a name="GoogleCesToolPythonFunction" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunction.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolPythonFunction(
  name: str = None,
  python_code: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunction.property.name">name</a></code> | <code>str</code> | The name of the Python function to execute. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunction.property.pythonCode">python_code</a></code> | <code>str</code> | The Python code to execute for the tool. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunction.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Python function to execute.

Must match a Python function
name defined in the python code. Case sensitive. If the name is not
provided, the first function defined in the python code will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#name GoogleCesTool#name}

---

##### `python_code`<sup>Optional</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunction.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The Python code to execute for the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#python_code GoogleCesTool#python_code}

---

### GoogleCesToolSystemTool <a name="GoogleCesToolSystemTool" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemTool.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolSystemTool()
```


### GoogleCesToolTimeouts <a name="GoogleCesToolTimeouts" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#create GoogleCesTool#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#delete GoogleCesTool#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#update GoogleCesTool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#create GoogleCesTool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#delete GoogleCesTool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#update GoogleCesTool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesToolClientFunctionOutputReference <a name="GoogleCesToolClientFunctionOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolClientFunctionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putResponse">put_response</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.resetResponse">reset_response</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putParameters"></a>

```python
def put_parameters(
  type: str,
  additional_properties: str = None,
  any_of: str = None,
  default: str = None,
  defs: str = None,
  description: str = None,
  enum: typing.List[str] = None,
  items: str = None,
  maximum: typing.Union[int, float] = None,
  max_items: typing.Union[int, float] = None,
  minimum: typing.Union[int, float] = None,
  min_items: typing.Union[int, float] = None,
  nullable: bool | IResolvable = None,
  prefix_items: str = None,
  properties: str = None,
  ref: str = None,
  required: typing.List[str] = None,
  title: str = None,
  unique_items: bool | IResolvable = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putParameters.parameter.type"></a>

- *Type:* str

The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#type GoogleCesTool#type}

---

###### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putParameters.parameter.additionalProperties"></a>

- *Type:* str

Defines the schema for additional properties allowed in an object.

The value must be a valid JSON string representing the Schema object.
(Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#additional_properties GoogleCesTool#additional_properties}

---

###### `any_of`<sup>Optional</sup> <a name="any_of" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putParameters.parameter.anyOf"></a>

- *Type:* str

The instance value should be valid against at least one of the schemas in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#any_of GoogleCesTool#any_of}

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putParameters.parameter.default"></a>

- *Type:* str

Default value of the data.

Represents a dynamically typed value
which can be either null, a number, a string, a boolean, a struct,
or a list of values. The provided default value must be compatible
with the defined 'type' and other schema constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#default GoogleCesTool#default}

---

###### `defs`<sup>Optional</sup> <a name="defs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putParameters.parameter.defs"></a>

- *Type:* str

A map of definitions for use by ref. Only allowed at the root of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#defs GoogleCesTool#defs}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putParameters.parameter.description"></a>

- *Type:* str

The description of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#description GoogleCesTool#description}

---

###### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putParameters.parameter.enum"></a>

- *Type:* typing.List[str]

Possible values of the element of primitive type with enum format.

Examples:

1. We can define direction as :
   {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
2. We can define apartment number as :
   {type:INTEGER, format:enum, enum:["101", "201", "301"]}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#enum GoogleCesTool#enum}

---

###### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putParameters.parameter.items"></a>

- *Type:* str

Schema of the elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#items GoogleCesTool#items}

---

###### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putParameters.parameter.maximum"></a>

- *Type:* typing.Union[int, float]

Maximum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#maximum GoogleCesTool#maximum}

---

###### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putParameters.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Maximum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#max_items GoogleCesTool#max_items}

---

###### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putParameters.parameter.minimum"></a>

- *Type:* typing.Union[int, float]

Minimum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#minimum GoogleCesTool#minimum}

---

###### `min_items`<sup>Optional</sup> <a name="min_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putParameters.parameter.minItems"></a>

- *Type:* typing.Union[int, float]

Minimum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#min_items GoogleCesTool#min_items}

---

###### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putParameters.parameter.nullable"></a>

- *Type:* bool | cdktn.IResolvable

Indicates if the value may be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#nullable GoogleCesTool#nullable}

---

###### `prefix_items`<sup>Optional</sup> <a name="prefix_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putParameters.parameter.prefixItems"></a>

- *Type:* str

Schemas of initial elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#prefix_items GoogleCesTool#prefix_items}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putParameters.parameter.properties"></a>

- *Type:* str

Properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#properties GoogleCesTool#properties}

---

###### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putParameters.parameter.ref"></a>

- *Type:* str

Allows indirect references between schema nodes.

The value should be a
valid reference to a child of the root 'defs'.
For example, the following schema defines a reference to a schema node
named "Pet":
type: object
properties:
pet:
ref: #/defs/Pet
defs:
Pet:
type: object
properties:
name:
type: string
The value of the "pet" property is a reference to the schema node
named "Pet".
See details in
https://json-schema.org/understanding-json-schema/structuring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#ref GoogleCesTool#ref}

---

###### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putParameters.parameter.required"></a>

- *Type:* typing.List[str]

Required properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#required GoogleCesTool#required}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putParameters.parameter.title"></a>

- *Type:* str

The title of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#title GoogleCesTool#title}

---

###### `unique_items`<sup>Optional</sup> <a name="unique_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putParameters.parameter.uniqueItems"></a>

- *Type:* bool | cdktn.IResolvable

Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#unique_items GoogleCesTool#unique_items}

---

##### `put_response` <a name="put_response" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putResponse"></a>

```python
def put_response(
  type: str,
  additional_properties: str = None,
  any_of: str = None,
  default: str = None,
  defs: str = None,
  description: str = None,
  enum: typing.List[str] = None,
  items: str = None,
  maximum: typing.Union[int, float] = None,
  max_items: typing.Union[int, float] = None,
  minimum: typing.Union[int, float] = None,
  min_items: typing.Union[int, float] = None,
  nullable: bool | IResolvable = None,
  prefix_items: str = None,
  properties: str = None,
  ref: str = None,
  required: typing.List[str] = None,
  title: str = None,
  unique_items: bool | IResolvable = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putResponse.parameter.type"></a>

- *Type:* str

The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#type GoogleCesTool#type}

---

###### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putResponse.parameter.additionalProperties"></a>

- *Type:* str

Defines the schema for additional properties allowed in an object.

The value must be a valid JSON string representing the Schema object.
(Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#additional_properties GoogleCesTool#additional_properties}

---

###### `any_of`<sup>Optional</sup> <a name="any_of" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putResponse.parameter.anyOf"></a>

- *Type:* str

The instance value should be valid against at least one of the schemas in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#any_of GoogleCesTool#any_of}

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putResponse.parameter.default"></a>

- *Type:* str

Default value of the data.

Represents a dynamically typed value
which can be either null, a number, a string, a boolean, a struct,
or a list of values. The provided default value must be compatible
with the defined 'type' and other schema constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#default GoogleCesTool#default}

---

###### `defs`<sup>Optional</sup> <a name="defs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putResponse.parameter.defs"></a>

- *Type:* str

A map of definitions for use by ref. Only allowed at the root of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#defs GoogleCesTool#defs}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putResponse.parameter.description"></a>

- *Type:* str

The description of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#description GoogleCesTool#description}

---

###### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putResponse.parameter.enum"></a>

- *Type:* typing.List[str]

Possible values of the element of primitive type with enum format.

Examples:

1. We can define direction as :
   {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
2. We can define apartment number as :
   {type:INTEGER, format:enum, enum:["101", "201", "301"]}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#enum GoogleCesTool#enum}

---

###### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putResponse.parameter.items"></a>

- *Type:* str

Schema of the elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#items GoogleCesTool#items}

---

###### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putResponse.parameter.maximum"></a>

- *Type:* typing.Union[int, float]

Maximum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#maximum GoogleCesTool#maximum}

---

###### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putResponse.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Maximum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#max_items GoogleCesTool#max_items}

---

###### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putResponse.parameter.minimum"></a>

- *Type:* typing.Union[int, float]

Minimum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#minimum GoogleCesTool#minimum}

---

###### `min_items`<sup>Optional</sup> <a name="min_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putResponse.parameter.minItems"></a>

- *Type:* typing.Union[int, float]

Minimum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#min_items GoogleCesTool#min_items}

---

###### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putResponse.parameter.nullable"></a>

- *Type:* bool | cdktn.IResolvable

Indicates if the value may be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#nullable GoogleCesTool#nullable}

---

###### `prefix_items`<sup>Optional</sup> <a name="prefix_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putResponse.parameter.prefixItems"></a>

- *Type:* str

Schemas of initial elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#prefix_items GoogleCesTool#prefix_items}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putResponse.parameter.properties"></a>

- *Type:* str

Properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#properties GoogleCesTool#properties}

---

###### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putResponse.parameter.ref"></a>

- *Type:* str

Allows indirect references between schema nodes.

The value should be a
valid reference to a child of the root 'defs'.
For example, the following schema defines a reference to a schema node
named "Pet":
type: object
properties:
pet:
ref: #/defs/Pet
defs:
Pet:
type: object
properties:
name:
type: string
The value of the "pet" property is a reference to the schema node
named "Pet".
See details in
https://json-schema.org/understanding-json-schema/structuring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#ref GoogleCesTool#ref}

---

###### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putResponse.parameter.required"></a>

- *Type:* typing.List[str]

Required properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#required GoogleCesTool#required}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putResponse.parameter.title"></a>

- *Type:* str

The title of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#title GoogleCesTool#title}

---

###### `unique_items`<sup>Optional</sup> <a name="unique_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.putResponse.parameter.uniqueItems"></a>

- *Type:* bool | cdktn.IResolvable

Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#unique_items GoogleCesTool#unique_items}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_response` <a name="reset_response" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.resetResponse"></a>

```python
def reset_response() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference">GoogleCesToolClientFunctionParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.property.response">response</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference">GoogleCesToolClientFunctionResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.property.parametersInput">parameters_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters">GoogleCesToolClientFunctionParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.property.responseInput">response_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse">GoogleCesToolClientFunctionResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunction">GoogleCesToolClientFunction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.property.parameters"></a>

```python
parameters: GoogleCesToolClientFunctionParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference">GoogleCesToolClientFunctionParametersOutputReference</a>

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.property.response"></a>

```python
response: GoogleCesToolClientFunctionResponseOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference">GoogleCesToolClientFunctionResponseOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.property.parametersInput"></a>

```python
parameters_input: GoogleCesToolClientFunctionParameters
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters">GoogleCesToolClientFunctionParameters</a>

---

##### `response_input`<sup>Optional</sup> <a name="response_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.property.responseInput"></a>

```python
response_input: GoogleCesToolClientFunctionResponse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse">GoogleCesToolClientFunctionResponse</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolClientFunction
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunction">GoogleCesToolClientFunction</a>

---


### GoogleCesToolClientFunctionParametersOutputReference <a name="GoogleCesToolClientFunctionParametersOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolClientFunctionParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetAnyOf">reset_any_of</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetDefs">reset_defs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetEnum">reset_enum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetItems">reset_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetMaximum">reset_maximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetMinimum">reset_minimum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetMinItems">reset_min_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetNullable">reset_nullable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetPrefixItems">reset_prefix_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetRef">reset_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetTitle">reset_title</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetUniqueItems">reset_unique_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_any_of` <a name="reset_any_of" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetAnyOf"></a>

```python
def reset_any_of() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_defs` <a name="reset_defs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetDefs"></a>

```python
def reset_defs() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enum` <a name="reset_enum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetEnum"></a>

```python
def reset_enum() -> None
```

##### `reset_items` <a name="reset_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetItems"></a>

```python
def reset_items() -> None
```

##### `reset_maximum` <a name="reset_maximum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetMaximum"></a>

```python
def reset_maximum() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_minimum` <a name="reset_minimum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetMinimum"></a>

```python
def reset_minimum() -> None
```

##### `reset_min_items` <a name="reset_min_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetMinItems"></a>

```python
def reset_min_items() -> None
```

##### `reset_nullable` <a name="reset_nullable" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetNullable"></a>

```python
def reset_nullable() -> None
```

##### `reset_prefix_items` <a name="reset_prefix_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetPrefixItems"></a>

```python
def reset_prefix_items() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_ref` <a name="reset_ref" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetRef"></a>

```python
def reset_ref() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```

##### `reset_unique_items` <a name="reset_unique_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.resetUniqueItems"></a>

```python
def reset_unique_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.anyOfInput">any_of_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.defsInput">defs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.enumInput">enum_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.itemsInput">items_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.maximumInput">maximum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.minimumInput">minimum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.minItemsInput">min_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.nullableInput">nullable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.prefixItemsInput">prefix_items_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.propertiesInput">properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.refInput">ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.requiredInput">required_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.uniqueItemsInput">unique_items_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.additionalProperties">additional_properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.anyOf">any_of</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.defs">defs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.enum">enum</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.items">items</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.maximum">maximum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.minimum">minimum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.minItems">min_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.nullable">nullable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.prefixItems">prefix_items</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.properties">properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.required">required</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.uniqueItems">unique_items</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters">GoogleCesToolClientFunctionParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.additionalPropertiesInput"></a>

```python
additional_properties_input: str
```

- *Type:* str

---

##### `any_of_input`<sup>Optional</sup> <a name="any_of_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.anyOfInput"></a>

```python
any_of_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `defs_input`<sup>Optional</sup> <a name="defs_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.defsInput"></a>

```python
defs_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enum_input`<sup>Optional</sup> <a name="enum_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.enumInput"></a>

```python
enum_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.itemsInput"></a>

```python
items_input: str
```

- *Type:* str

---

##### `maximum_input`<sup>Optional</sup> <a name="maximum_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.maximumInput"></a>

```python
maximum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_input`<sup>Optional</sup> <a name="minimum_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.minimumInput"></a>

```python
minimum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_items_input`<sup>Optional</sup> <a name="min_items_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.minItemsInput"></a>

```python
min_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nullable_input`<sup>Optional</sup> <a name="nullable_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.nullableInput"></a>

```python
nullable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix_items_input`<sup>Optional</sup> <a name="prefix_items_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.prefixItemsInput"></a>

```python
prefix_items_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.propertiesInput"></a>

```python
properties_input: str
```

- *Type:* str

---

##### `ref_input`<sup>Optional</sup> <a name="ref_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.refInput"></a>

```python
ref_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.requiredInput"></a>

```python
required_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `unique_items_input`<sup>Optional</sup> <a name="unique_items_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.uniqueItemsInput"></a>

```python
unique_items_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.additionalProperties"></a>

```python
additional_properties: str
```

- *Type:* str

---

##### `any_of`<sup>Required</sup> <a name="any_of" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.anyOf"></a>

```python
any_of: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `defs`<sup>Required</sup> <a name="defs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.defs"></a>

```python
defs: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.enum"></a>

```python
enum: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.items"></a>

```python
items: str
```

- *Type:* str

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.maximum"></a>

```python
maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.minimum"></a>

```python
minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_items`<sup>Required</sup> <a name="min_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.minItems"></a>

```python
min_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.nullable"></a>

```python
nullable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix_items`<sup>Required</sup> <a name="prefix_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.prefixItems"></a>

```python
prefix_items: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.properties"></a>

```python
properties: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.required"></a>

```python
required: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unique_items`<sup>Required</sup> <a name="unique_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.uniqueItems"></a>

```python
unique_items: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParametersOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolClientFunctionParameters
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionParameters">GoogleCesToolClientFunctionParameters</a>

---


### GoogleCesToolClientFunctionResponseOutputReference <a name="GoogleCesToolClientFunctionResponseOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolClientFunctionResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetAnyOf">reset_any_of</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetDefs">reset_defs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetEnum">reset_enum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetItems">reset_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetMaximum">reset_maximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetMinimum">reset_minimum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetMinItems">reset_min_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetNullable">reset_nullable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetPrefixItems">reset_prefix_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetRef">reset_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetTitle">reset_title</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetUniqueItems">reset_unique_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_any_of` <a name="reset_any_of" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetAnyOf"></a>

```python
def reset_any_of() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_defs` <a name="reset_defs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetDefs"></a>

```python
def reset_defs() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enum` <a name="reset_enum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetEnum"></a>

```python
def reset_enum() -> None
```

##### `reset_items` <a name="reset_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetItems"></a>

```python
def reset_items() -> None
```

##### `reset_maximum` <a name="reset_maximum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetMaximum"></a>

```python
def reset_maximum() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_minimum` <a name="reset_minimum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetMinimum"></a>

```python
def reset_minimum() -> None
```

##### `reset_min_items` <a name="reset_min_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetMinItems"></a>

```python
def reset_min_items() -> None
```

##### `reset_nullable` <a name="reset_nullable" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetNullable"></a>

```python
def reset_nullable() -> None
```

##### `reset_prefix_items` <a name="reset_prefix_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetPrefixItems"></a>

```python
def reset_prefix_items() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_ref` <a name="reset_ref" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetRef"></a>

```python
def reset_ref() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```

##### `reset_unique_items` <a name="reset_unique_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.resetUniqueItems"></a>

```python
def reset_unique_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.anyOfInput">any_of_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.defsInput">defs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.enumInput">enum_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.itemsInput">items_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.maximumInput">maximum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.minimumInput">minimum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.minItemsInput">min_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.nullableInput">nullable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.prefixItemsInput">prefix_items_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.propertiesInput">properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.refInput">ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.requiredInput">required_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.uniqueItemsInput">unique_items_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.additionalProperties">additional_properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.anyOf">any_of</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.defs">defs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.enum">enum</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.items">items</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.maximum">maximum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.minimum">minimum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.minItems">min_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.nullable">nullable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.prefixItems">prefix_items</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.properties">properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.required">required</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.uniqueItems">unique_items</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse">GoogleCesToolClientFunctionResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.additionalPropertiesInput"></a>

```python
additional_properties_input: str
```

- *Type:* str

---

##### `any_of_input`<sup>Optional</sup> <a name="any_of_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.anyOfInput"></a>

```python
any_of_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `defs_input`<sup>Optional</sup> <a name="defs_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.defsInput"></a>

```python
defs_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enum_input`<sup>Optional</sup> <a name="enum_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.enumInput"></a>

```python
enum_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.itemsInput"></a>

```python
items_input: str
```

- *Type:* str

---

##### `maximum_input`<sup>Optional</sup> <a name="maximum_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.maximumInput"></a>

```python
maximum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_input`<sup>Optional</sup> <a name="minimum_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.minimumInput"></a>

```python
minimum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_items_input`<sup>Optional</sup> <a name="min_items_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.minItemsInput"></a>

```python
min_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nullable_input`<sup>Optional</sup> <a name="nullable_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.nullableInput"></a>

```python
nullable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix_items_input`<sup>Optional</sup> <a name="prefix_items_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.prefixItemsInput"></a>

```python
prefix_items_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.propertiesInput"></a>

```python
properties_input: str
```

- *Type:* str

---

##### `ref_input`<sup>Optional</sup> <a name="ref_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.refInput"></a>

```python
ref_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.requiredInput"></a>

```python
required_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `unique_items_input`<sup>Optional</sup> <a name="unique_items_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.uniqueItemsInput"></a>

```python
unique_items_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.additionalProperties"></a>

```python
additional_properties: str
```

- *Type:* str

---

##### `any_of`<sup>Required</sup> <a name="any_of" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.anyOf"></a>

```python
any_of: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `defs`<sup>Required</sup> <a name="defs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.defs"></a>

```python
defs: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.enum"></a>

```python
enum: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.items"></a>

```python
items: str
```

- *Type:* str

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.maximum"></a>

```python
maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.minimum"></a>

```python
minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_items`<sup>Required</sup> <a name="min_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.minItems"></a>

```python
min_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.nullable"></a>

```python
nullable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix_items`<sup>Required</sup> <a name="prefix_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.prefixItems"></a>

```python
prefix_items: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.properties"></a>

```python
properties: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.required"></a>

```python
required: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unique_items`<sup>Required</sup> <a name="unique_items" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.uniqueItems"></a>

```python
unique_items: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponseOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolClientFunctionResponse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolClientFunctionResponse">GoogleCesToolClientFunctionResponse</a>

---


### GoogleCesToolDataStoreToolBoostSpecsList <a name="GoogleCesToolDataStoreToolBoostSpecsList" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesToolDataStoreToolBoostSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecs">GoogleCesToolDataStoreToolBoostSpecs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesToolDataStoreToolBoostSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecs">GoogleCesToolDataStoreToolBoostSpecs</a>]

---


### GoogleCesToolDataStoreToolBoostSpecsOutputReference <a name="GoogleCesToolDataStoreToolBoostSpecsOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.putSpec">put_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_spec` <a name="put_spec" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.putSpec"></a>

```python
def put_spec(
  value: IResolvable | typing.List[GoogleCesToolDataStoreToolBoostSpecsSpec]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.putSpec.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpec">GoogleCesToolDataStoreToolBoostSpecsSpec</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList">GoogleCesToolDataStoreToolBoostSpecsSpecList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.property.dataStoresInput">data_stores_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.property.specInput">spec_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpec">GoogleCesToolDataStoreToolBoostSpecsSpec</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.property.dataStores">data_stores</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecs">GoogleCesToolDataStoreToolBoostSpecs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.property.spec"></a>

```python
spec: GoogleCesToolDataStoreToolBoostSpecsSpecList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList">GoogleCesToolDataStoreToolBoostSpecsSpecList</a>

---

##### `data_stores_input`<sup>Optional</sup> <a name="data_stores_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.property.dataStoresInput"></a>

```python
data_stores_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.property.specInput"></a>

```python
spec_input: IResolvable | typing.List[GoogleCesToolDataStoreToolBoostSpecsSpec]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpec">GoogleCesToolDataStoreToolBoostSpecsSpec</a>]

---

##### `data_stores`<sup>Required</sup> <a name="data_stores" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.property.dataStores"></a>

```python
data_stores: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesToolDataStoreToolBoostSpecs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecs">GoogleCesToolDataStoreToolBoostSpecs</a>

---


### GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList <a name="GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>]

---


### GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference <a name="GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resetAttributeValue">reset_attribute_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resetBoostAmount">reset_boost_amount</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute_value` <a name="reset_attribute_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resetAttributeValue"></a>

```python
def reset_attribute_value() -> None
```

##### `reset_boost_amount` <a name="reset_boost_amount" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resetBoostAmount"></a>

```python
def reset_boost_amount() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.attributeValueInput">attribute_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.boostAmountInput">boost_amount_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.boostAmount">boost_amount</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_value_input`<sup>Optional</sup> <a name="attribute_value_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.attributeValueInput"></a>

```python
attribute_value_input: str
```

- *Type:* str

---

##### `boost_amount_input`<sup>Optional</sup> <a name="boost_amount_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.boostAmountInput"></a>

```python
boost_amount_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `boost_amount`<sup>Required</sup> <a name="boost_amount" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.boostAmount"></a>

```python
boost_amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>

---


### GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference <a name="GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.putControlPoints">put_control_points</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetAttributeType">reset_attribute_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetControlPoints">reset_control_points</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetFieldName">reset_field_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetInterpolationType">reset_interpolation_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_control_points` <a name="put_control_points" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.putControlPoints"></a>

```python
def put_control_points(
  value: IResolvable | typing.List[GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.putControlPoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>]

---

##### `reset_attribute_type` <a name="reset_attribute_type" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetAttributeType"></a>

```python
def reset_attribute_type() -> None
```

##### `reset_control_points` <a name="reset_control_points" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetControlPoints"></a>

```python
def reset_control_points() -> None
```

##### `reset_field_name` <a name="reset_field_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetFieldName"></a>

```python
def reset_field_name() -> None
```

##### `reset_interpolation_type` <a name="reset_interpolation_type" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetInterpolationType"></a>

```python
def reset_interpolation_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.controlPoints">control_points</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.attributeTypeInput">attribute_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.controlPointsInput">control_points_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.interpolationTypeInput">interpolation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.attributeType">attribute_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.interpolationType">interpolation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `control_points`<sup>Required</sup> <a name="control_points" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.controlPoints"></a>

```python
control_points: GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList</a>

---

##### `attribute_type_input`<sup>Optional</sup> <a name="attribute_type_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.attributeTypeInput"></a>

```python
attribute_type_input: str
```

- *Type:* str

---

##### `control_points_input`<sup>Optional</sup> <a name="control_points_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.controlPointsInput"></a>

```python
control_points_input: IResolvable | typing.List[GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>]

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `interpolation_type_input`<sup>Optional</sup> <a name="interpolation_type_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.interpolationTypeInput"></a>

```python
interpolation_type_input: str
```

- *Type:* str

---

##### `attribute_type`<sup>Required</sup> <a name="attribute_type" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.attributeType"></a>

```python
attribute_type: str
```

- *Type:* str

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `interpolation_type`<sup>Required</sup> <a name="interpolation_type" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.interpolationType"></a>

```python
interpolation_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a>

---


### GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList <a name="GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>]

---


### GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference <a name="GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.putBoostControlSpec">put_boost_control_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resetBoost">reset_boost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resetBoostControlSpec">reset_boost_control_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_boost_control_spec` <a name="put_boost_control_spec" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.putBoostControlSpec"></a>

```python
def put_boost_control_spec(
  attribute_type: str = None,
  control_points: IResolvable | typing.List[GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints] = None,
  field_name: str = None,
  interpolation_type: str = None
) -> None
```

###### `attribute_type`<sup>Optional</sup> <a name="attribute_type" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.putBoostControlSpec.parameter.attributeType"></a>

- *Type:* str

The attribute type to be used to determine the boost amount.

The
attribute value can be derived from the field value of the specified
field_name. In the case of numerical it is straightforward i.e.
attribute_value = numerical_field_value. In the case of freshness
however, attribute_value = (time.now() - datetime_field_value).
Possible values:
NUMERICAL
FRESHNESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#attribute_type GoogleCesTool#attribute_type}

---

###### `control_points`<sup>Optional</sup> <a name="control_points" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.putBoostControlSpec.parameter.controlPoints"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>]

control_points block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#control_points GoogleCesTool#control_points}

---

###### `field_name`<sup>Optional</sup> <a name="field_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.putBoostControlSpec.parameter.fieldName"></a>

- *Type:* str

The name of the field whose value will be used to determine the boost amount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#field_name GoogleCesTool#field_name}

---

###### `interpolation_type`<sup>Optional</sup> <a name="interpolation_type" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.putBoostControlSpec.parameter.interpolationType"></a>

- *Type:* str

The interpolation type to be applied to connect the control points listed below. Possible values: LINEAR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#interpolation_type GoogleCesTool#interpolation_type}

---

##### `reset_boost` <a name="reset_boost" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resetBoost"></a>

```python
def reset_boost() -> None
```

##### `reset_boost_control_spec` <a name="reset_boost_control_spec" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resetBoostControlSpec"></a>

```python
def reset_boost_control_spec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostControlSpec">boost_control_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostControlSpecInput">boost_control_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostInput">boost_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boost">boost</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boost_control_spec`<sup>Required</sup> <a name="boost_control_spec" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostControlSpec"></a>

```python
boost_control_spec: GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference</a>

---

##### `boost_control_spec_input`<sup>Optional</sup> <a name="boost_control_spec_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostControlSpecInput"></a>

```python
boost_control_spec_input: GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a>

---

##### `boost_input`<sup>Optional</sup> <a name="boost_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostInput"></a>

```python
boost_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `boost`<sup>Required</sup> <a name="boost" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boost"></a>

```python
boost: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>

---


### GoogleCesToolDataStoreToolBoostSpecsSpecList <a name="GoogleCesToolDataStoreToolBoostSpecsSpecList" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpec">GoogleCesToolDataStoreToolBoostSpecsSpec</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesToolDataStoreToolBoostSpecsSpec]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpec">GoogleCesToolDataStoreToolBoostSpecsSpec</a>]

---


### GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference <a name="GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.putConditionBoostSpecs">put_condition_boost_specs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition_boost_specs` <a name="put_condition_boost_specs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.putConditionBoostSpecs"></a>

```python
def put_condition_boost_specs(
  value: IResolvable | typing.List[GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.putConditionBoostSpecs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.property.conditionBoostSpecs">condition_boost_specs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.property.conditionBoostSpecsInput">condition_boost_specs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpec">GoogleCesToolDataStoreToolBoostSpecsSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_boost_specs`<sup>Required</sup> <a name="condition_boost_specs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.property.conditionBoostSpecs"></a>

```python
condition_boost_specs: GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList</a>

---

##### `condition_boost_specs_input`<sup>Optional</sup> <a name="condition_boost_specs_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.property.conditionBoostSpecsInput"></a>

```python
condition_boost_specs_input: IResolvable | typing.List[GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">GoogleCesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpecOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesToolDataStoreToolBoostSpecsSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsSpec">GoogleCesToolDataStoreToolBoostSpecsSpec</a>

---


### GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList <a name="GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference <a name="GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.collection">collection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.collectionDisplayName">collection_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig">GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.collection"></a>

```python
collection: str
```

- *Type:* str

---

##### `collection_display_name`<sup>Required</sup> <a name="collection_display_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.collectionDisplayName"></a>

```python
collection_display_name: str
```

- *Type:* str

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig">GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig</a>

---


### GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference <a name="GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.connectorConfig">connector_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList">GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.documentProcessingMode">document_processing_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_config`<sup>Required</sup> <a name="connector_config" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.connectorConfig"></a>

```python
connector_config: GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList">GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `document_processing_mode`<sup>Required</sup> <a name="document_processing_mode" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.documentProcessingMode"></a>

```python
document_processing_mode: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a>

---


### GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList <a name="GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSources">GoogleCesToolDataStoreToolEngineSourceDataStoreSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesToolDataStoreToolEngineSourceDataStoreSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSources">GoogleCesToolDataStoreToolEngineSourceDataStoreSources</a>]

---


### GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference <a name="GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.putDataStore">put_data_store</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resetDataStore">reset_data_store</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_store` <a name="put_data_store" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.putDataStore"></a>

```python
def put_data_store(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.putDataStore.parameter.name"></a>

- *Type:* str

Full resource name of the DataStore. Format: 'projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#name GoogleCesTool#name}

---

##### `reset_data_store` <a name="reset_data_store" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resetDataStore"></a>

```python
def reset_data_store() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.dataStore">data_store</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference">GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.dataStoreInput">data_store_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSources">GoogleCesToolDataStoreToolEngineSourceDataStoreSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_store`<sup>Required</sup> <a name="data_store" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.dataStore"></a>

```python
data_store: GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference">GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference</a>

---

##### `data_store_input`<sup>Optional</sup> <a name="data_store_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.dataStoreInput"></a>

```python
data_store_input: GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesToolDataStoreToolEngineSourceDataStoreSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSources">GoogleCesToolDataStoreToolEngineSourceDataStoreSources</a>

---


### GoogleCesToolDataStoreToolEngineSourceOutputReference <a name="GoogleCesToolDataStoreToolEngineSourceOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.putDataStoreSources">put_data_store_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.resetDataStoreSources">reset_data_store_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_store_sources` <a name="put_data_store_sources" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.putDataStoreSources"></a>

```python
def put_data_store_sources(
  value: IResolvable | typing.List[GoogleCesToolDataStoreToolEngineSourceDataStoreSources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.putDataStoreSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSources">GoogleCesToolDataStoreToolEngineSourceDataStoreSources</a>]

---

##### `reset_data_store_sources` <a name="reset_data_store_sources" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.resetDataStoreSources"></a>

```python
def reset_data_store_sources() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.property.dataStoreSources">data_store_sources</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList">GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.property.dataStoreSourcesInput">data_store_sources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSources">GoogleCesToolDataStoreToolEngineSourceDataStoreSources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSource">GoogleCesToolDataStoreToolEngineSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_store_sources`<sup>Required</sup> <a name="data_store_sources" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.property.dataStoreSources"></a>

```python
data_store_sources: GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList">GoogleCesToolDataStoreToolEngineSourceDataStoreSourcesList</a>

---

##### `data_store_sources_input`<sup>Optional</sup> <a name="data_store_sources_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.property.dataStoreSourcesInput"></a>

```python
data_store_sources_input: IResolvable | typing.List[GoogleCesToolDataStoreToolEngineSourceDataStoreSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSources">GoogleCesToolDataStoreToolEngineSourceDataStoreSources</a>]

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolDataStoreToolEngineSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSource">GoogleCesToolDataStoreToolEngineSource</a>

---


### GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference <a name="GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resetGroundingLevel">reset_grounding_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_grounding_level` <a name="reset_grounding_level" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resetGroundingLevel"></a>

```python
def reset_grounding_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.groundingLevelInput">grounding_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.groundingLevel">grounding_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfig">GoogleCesToolDataStoreToolModalityConfigsGroundingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `grounding_level_input`<sup>Optional</sup> <a name="grounding_level_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.groundingLevelInput"></a>

```python
grounding_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `grounding_level`<sup>Required</sup> <a name="grounding_level" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.groundingLevel"></a>

```python
grounding_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolDataStoreToolModalityConfigsGroundingConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfig">GoogleCesToolDataStoreToolModalityConfigsGroundingConfig</a>

---


### GoogleCesToolDataStoreToolModalityConfigsList <a name="GoogleCesToolDataStoreToolModalityConfigsList" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesToolDataStoreToolModalityConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigs">GoogleCesToolDataStoreToolModalityConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesToolDataStoreToolModalityConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigs">GoogleCesToolDataStoreToolModalityConfigs</a>]

---


### GoogleCesToolDataStoreToolModalityConfigsOutputReference <a name="GoogleCesToolDataStoreToolModalityConfigsOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.putGroundingConfig">put_grounding_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.putRewriterConfig">put_rewriter_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.putSummarizationConfig">put_summarization_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.resetGroundingConfig">reset_grounding_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.resetRewriterConfig">reset_rewriter_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.resetSummarizationConfig">reset_summarization_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_grounding_config` <a name="put_grounding_config" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.putGroundingConfig"></a>

```python
def put_grounding_config(
  disabled: bool | IResolvable = None,
  grounding_level: typing.Union[int, float] = None
) -> None
```

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.putGroundingConfig.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether grounding is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#disabled GoogleCesTool#disabled}

---

###### `grounding_level`<sup>Optional</sup> <a name="grounding_level" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.putGroundingConfig.parameter.groundingLevel"></a>

- *Type:* typing.Union[int, float]

The groundedness threshold of the answer based on the retrieved sources.

The value has a configurable range of [1, 5]. The level is used to
threshold the groundedness of the answer, meaning that all responses with
a groundedness score below the threshold will fall back to returning
relevant snippets only.
For example, a level of 3 means that the groundedness score must be
3 or higher for the response to be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#grounding_level GoogleCesTool#grounding_level}

---

##### `put_rewriter_config` <a name="put_rewriter_config" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.putRewriterConfig"></a>

```python
def put_rewriter_config(
  model_settings: GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings,
  disabled: bool | IResolvable = None,
  prompt: str = None
) -> None
```

###### `model_settings`<sup>Required</sup> <a name="model_settings" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.putRewriterConfig.parameter.modelSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#model_settings GoogleCesTool#model_settings}

---

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.putRewriterConfig.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the rewriter is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#disabled GoogleCesTool#disabled}

---

###### `prompt`<sup>Optional</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.putRewriterConfig.parameter.prompt"></a>

- *Type:* str

The prompt definition. If not set, default prompt will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#prompt GoogleCesTool#prompt}

---

##### `put_summarization_config` <a name="put_summarization_config" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.putSummarizationConfig"></a>

```python
def put_summarization_config(
  disabled: bool | IResolvable = None,
  model_settings: GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings = None,
  prompt: str = None
) -> None
```

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.putSummarizationConfig.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether summarization is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#disabled GoogleCesTool#disabled}

---

###### `model_settings`<sup>Optional</sup> <a name="model_settings" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.putSummarizationConfig.parameter.modelSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#model_settings GoogleCesTool#model_settings}

---

###### `prompt`<sup>Optional</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.putSummarizationConfig.parameter.prompt"></a>

- *Type:* str

The prompt definition. If not set, default prompt will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#prompt GoogleCesTool#prompt}

---

##### `reset_grounding_config` <a name="reset_grounding_config" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.resetGroundingConfig"></a>

```python
def reset_grounding_config() -> None
```

##### `reset_rewriter_config` <a name="reset_rewriter_config" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.resetRewriterConfig"></a>

```python
def reset_rewriter_config() -> None
```

##### `reset_summarization_config` <a name="reset_summarization_config" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.resetSummarizationConfig"></a>

```python
def reset_summarization_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.property.groundingConfig">grounding_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference">GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.property.rewriterConfig">rewriter_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference">GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.property.summarizationConfig">summarization_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference">GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.property.groundingConfigInput">grounding_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfig">GoogleCesToolDataStoreToolModalityConfigsGroundingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.property.modalityTypeInput">modality_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.property.rewriterConfigInput">rewriter_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfig">GoogleCesToolDataStoreToolModalityConfigsRewriterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.property.summarizationConfigInput">summarization_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig">GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.property.modalityType">modality_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigs">GoogleCesToolDataStoreToolModalityConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grounding_config`<sup>Required</sup> <a name="grounding_config" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.property.groundingConfig"></a>

```python
grounding_config: GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference">GoogleCesToolDataStoreToolModalityConfigsGroundingConfigOutputReference</a>

---

##### `rewriter_config`<sup>Required</sup> <a name="rewriter_config" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.property.rewriterConfig"></a>

```python
rewriter_config: GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference">GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference</a>

---

##### `summarization_config`<sup>Required</sup> <a name="summarization_config" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.property.summarizationConfig"></a>

```python
summarization_config: GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference">GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference</a>

---

##### `grounding_config_input`<sup>Optional</sup> <a name="grounding_config_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.property.groundingConfigInput"></a>

```python
grounding_config_input: GoogleCesToolDataStoreToolModalityConfigsGroundingConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsGroundingConfig">GoogleCesToolDataStoreToolModalityConfigsGroundingConfig</a>

---

##### `modality_type_input`<sup>Optional</sup> <a name="modality_type_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.property.modalityTypeInput"></a>

```python
modality_type_input: str
```

- *Type:* str

---

##### `rewriter_config_input`<sup>Optional</sup> <a name="rewriter_config_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.property.rewriterConfigInput"></a>

```python
rewriter_config_input: GoogleCesToolDataStoreToolModalityConfigsRewriterConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfig">GoogleCesToolDataStoreToolModalityConfigsRewriterConfig</a>

---

##### `summarization_config_input`<sup>Optional</sup> <a name="summarization_config_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.property.summarizationConfigInput"></a>

```python
summarization_config_input: GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig">GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig</a>

---

##### `modality_type`<sup>Required</sup> <a name="modality_type" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.property.modalityType"></a>

```python
modality_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesToolDataStoreToolModalityConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigs">GoogleCesToolDataStoreToolModalityConfigs</a>

---


### GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference <a name="GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resetModel">reset_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resetTemperature">reset_temperature</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model` <a name="reset_model" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resetModel"></a>

```python
def reset_model() -> None
```

##### `reset_temperature` <a name="reset_temperature" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resetTemperature"></a>

```python
def reset_temperature() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.temperatureInput">temperature_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `temperature_input`<sup>Optional</sup> <a name="temperature_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.temperatureInput"></a>

```python
temperature_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a>

---


### GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference <a name="GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.putModelSettings">put_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resetPrompt">reset_prompt</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_model_settings` <a name="put_model_settings" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.putModelSettings"></a>

```python
def put_model_settings(
  model: str = None,
  temperature: typing.Union[int, float] = None
) -> None
```

###### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.putModelSettings.parameter.model"></a>

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#model GoogleCesTool#model}

---

###### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.putModelSettings.parameter.temperature"></a>

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#temperature GoogleCesTool#temperature}

---

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_prompt` <a name="reset_prompt" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resetPrompt"></a>

```python
def reset_prompt() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference">GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.modelSettingsInput">model_settings_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.promptInput">prompt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.prompt">prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfig">GoogleCesToolDataStoreToolModalityConfigsRewriterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_settings`<sup>Required</sup> <a name="model_settings" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.modelSettings"></a>

```python
model_settings: GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference">GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference</a>

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `model_settings_input`<sup>Optional</sup> <a name="model_settings_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.modelSettingsInput"></a>

```python
model_settings_input: GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">GoogleCesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a>

---

##### `prompt_input`<sup>Optional</sup> <a name="prompt_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.promptInput"></a>

```python
prompt_input: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.prompt"></a>

```python
prompt: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolDataStoreToolModalityConfigsRewriterConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsRewriterConfig">GoogleCesToolDataStoreToolModalityConfigsRewriterConfig</a>

---


### GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference <a name="GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resetModel">reset_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resetTemperature">reset_temperature</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model` <a name="reset_model" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resetModel"></a>

```python
def reset_model() -> None
```

##### `reset_temperature` <a name="reset_temperature" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resetTemperature"></a>

```python
def reset_temperature() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.temperatureInput">temperature_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `temperature_input`<sup>Optional</sup> <a name="temperature_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.temperatureInput"></a>

```python
temperature_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a>

---


### GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference <a name="GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.putModelSettings">put_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetModelSettings">reset_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetPrompt">reset_prompt</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_model_settings` <a name="put_model_settings" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.putModelSettings"></a>

```python
def put_model_settings(
  model: str = None,
  temperature: typing.Union[int, float] = None
) -> None
```

###### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.putModelSettings.parameter.model"></a>

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#model GoogleCesTool#model}

---

###### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.putModelSettings.parameter.temperature"></a>

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#temperature GoogleCesTool#temperature}

---

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_model_settings` <a name="reset_model_settings" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetModelSettings"></a>

```python
def reset_model_settings() -> None
```

##### `reset_prompt` <a name="reset_prompt" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetPrompt"></a>

```python
def reset_prompt() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference">GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.modelSettingsInput">model_settings_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.promptInput">prompt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.prompt">prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig">GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_settings`<sup>Required</sup> <a name="model_settings" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.modelSettings"></a>

```python
model_settings: GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference">GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference</a>

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `model_settings_input`<sup>Optional</sup> <a name="model_settings_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.modelSettingsInput"></a>

```python
model_settings_input: GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a>

---

##### `prompt_input`<sup>Optional</sup> <a name="prompt_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.promptInput"></a>

```python
prompt_input: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.prompt"></a>

```python
prompt: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig">GoogleCesToolDataStoreToolModalityConfigsSummarizationConfig</a>

---


### GoogleCesToolDataStoreToolOutputReference <a name="GoogleCesToolDataStoreToolOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolDataStoreToolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.putBoostSpecs">put_boost_specs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.putEngineSource">put_engine_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.putModalityConfigs">put_modality_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.resetBoostSpecs">reset_boost_specs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.resetEngineSource">reset_engine_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.resetMaxResults">reset_max_results</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.resetModalityConfigs">reset_modality_configs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_boost_specs` <a name="put_boost_specs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.putBoostSpecs"></a>

```python
def put_boost_specs(
  value: IResolvable | typing.List[GoogleCesToolDataStoreToolBoostSpecs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.putBoostSpecs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecs">GoogleCesToolDataStoreToolBoostSpecs</a>]

---

##### `put_engine_source` <a name="put_engine_source" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.putEngineSource"></a>

```python
def put_engine_source(
  engine: str,
  data_store_sources: IResolvable | typing.List[GoogleCesToolDataStoreToolEngineSourceDataStoreSources] = None,
  filter: str = None
) -> None
```

###### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.putEngineSource.parameter.engine"></a>

- *Type:* str

Full resource name of the Engine. Format: 'projects/{project}/locations/{location}/collections/{collection}/engines/{engine}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#engine GoogleCesTool#engine}

---

###### `data_store_sources`<sup>Optional</sup> <a name="data_store_sources" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.putEngineSource.parameter.dataStoreSources"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceDataStoreSources">GoogleCesToolDataStoreToolEngineSourceDataStoreSources</a>]

data_store_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#data_store_sources GoogleCesTool#data_store_sources}

---

###### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.putEngineSource.parameter.filter"></a>

- *Type:* str

A filter applied to the search across the Engine. Not relevant and not used if 'data_store_sources' is provided. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_ces_tool#filter GoogleCesTool#filter}

---

##### `put_modality_configs` <a name="put_modality_configs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.putModalityConfigs"></a>

```python
def put_modality_configs(
  value: IResolvable | typing.List[GoogleCesToolDataStoreToolModalityConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.putModalityConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigs">GoogleCesToolDataStoreToolModalityConfigs</a>]

---

##### `reset_boost_specs` <a name="reset_boost_specs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.resetBoostSpecs"></a>

```python
def reset_boost_specs() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_engine_source` <a name="reset_engine_source" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.resetEngineSource"></a>

```python
def reset_engine_source() -> None
```

##### `reset_max_results` <a name="reset_max_results" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.resetMaxResults"></a>

```python
def reset_max_results() -> None
```

##### `reset_modality_configs` <a name="reset_modality_configs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.resetModalityConfigs"></a>

```python
def reset_modality_configs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.boostSpecs">boost_specs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList">GoogleCesToolDataStoreToolBoostSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.engineSource">engine_source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference">GoogleCesToolDataStoreToolEngineSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.modalityConfigs">modality_configs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList">GoogleCesToolDataStoreToolModalityConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.boostSpecsInput">boost_specs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecs">GoogleCesToolDataStoreToolBoostSpecs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.engineSourceInput">engine_source_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSource">GoogleCesToolDataStoreToolEngineSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.maxResultsInput">max_results_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.modalityConfigsInput">modality_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigs">GoogleCesToolDataStoreToolModalityConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.maxResults">max_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreTool">GoogleCesToolDataStoreTool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boost_specs`<sup>Required</sup> <a name="boost_specs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.boostSpecs"></a>

```python
boost_specs: GoogleCesToolDataStoreToolBoostSpecsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecsList">GoogleCesToolDataStoreToolBoostSpecsList</a>

---

##### `engine_source`<sup>Required</sup> <a name="engine_source" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.engineSource"></a>

```python
engine_source: GoogleCesToolDataStoreToolEngineSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSourceOutputReference">GoogleCesToolDataStoreToolEngineSourceOutputReference</a>

---

##### `modality_configs`<sup>Required</sup> <a name="modality_configs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.modalityConfigs"></a>

```python
modality_configs: GoogleCesToolDataStoreToolModalityConfigsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigsList">GoogleCesToolDataStoreToolModalityConfigsList</a>

---

##### `boost_specs_input`<sup>Optional</sup> <a name="boost_specs_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.boostSpecsInput"></a>

```python
boost_specs_input: IResolvable | typing.List[GoogleCesToolDataStoreToolBoostSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolBoostSpecs">GoogleCesToolDataStoreToolBoostSpecs</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `engine_source_input`<sup>Optional</sup> <a name="engine_source_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.engineSourceInput"></a>

```python
engine_source_input: GoogleCesToolDataStoreToolEngineSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolEngineSource">GoogleCesToolDataStoreToolEngineSource</a>

---

##### `max_results_input`<sup>Optional</sup> <a name="max_results_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.maxResultsInput"></a>

```python
max_results_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `modality_configs_input`<sup>Optional</sup> <a name="modality_configs_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.modalityConfigsInput"></a>

```python
modality_configs_input: IResolvable | typing.List[GoogleCesToolDataStoreToolModalityConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolModalityConfigs">GoogleCesToolDataStoreToolModalityConfigs</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `max_results`<sup>Required</sup> <a name="max_results" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.maxResults"></a>

```python
max_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreToolOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolDataStoreTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolDataStoreTool">GoogleCesToolDataStoreTool</a>

---


### GoogleCesToolGoogleSearchToolOutputReference <a name="GoogleCesToolGoogleSearchToolOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolGoogleSearchToolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.resetContextUrls">reset_context_urls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.resetExcludeDomains">reset_exclude_domains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.resetPreferredDomains">reset_preferred_domains</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_context_urls` <a name="reset_context_urls" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.resetContextUrls"></a>

```python
def reset_context_urls() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_exclude_domains` <a name="reset_exclude_domains" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.resetExcludeDomains"></a>

```python
def reset_exclude_domains() -> None
```

##### `reset_preferred_domains` <a name="reset_preferred_domains" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.resetPreferredDomains"></a>

```python
def reset_preferred_domains() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.contextUrlsInput">context_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.excludeDomainsInput">exclude_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.preferredDomainsInput">preferred_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.contextUrls">context_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.excludeDomains">exclude_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.preferredDomains">preferred_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchTool">GoogleCesToolGoogleSearchTool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `context_urls_input`<sup>Optional</sup> <a name="context_urls_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.contextUrlsInput"></a>

```python
context_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `exclude_domains_input`<sup>Optional</sup> <a name="exclude_domains_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.excludeDomainsInput"></a>

```python
exclude_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `preferred_domains_input`<sup>Optional</sup> <a name="preferred_domains_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.preferredDomainsInput"></a>

```python
preferred_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `context_urls`<sup>Required</sup> <a name="context_urls" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.contextUrls"></a>

```python
context_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `exclude_domains`<sup>Required</sup> <a name="exclude_domains" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.excludeDomains"></a>

```python
exclude_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `preferred_domains`<sup>Required</sup> <a name="preferred_domains" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.preferredDomains"></a>

```python
preferred_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchToolOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolGoogleSearchTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolGoogleSearchTool">GoogleCesToolGoogleSearchTool</a>

---


### GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList <a name="GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference <a name="GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion">api_key_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.requestLocation">request_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfig">GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_secret_version`<sup>Required</sup> <a name="api_key_secret_version" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```python
api_key_secret_version: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```python
request_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfig">GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfig</a>

---


### GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList <a name="GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference <a name="GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfig">GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfig">GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfig</a>

---


### GoogleCesToolOpenApiToolApiAuthenticationList <a name="GoogleCesToolOpenApiToolApiAuthenticationList" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesToolOpenApiToolApiAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList <a name="GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference <a name="GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion">client_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauth_grant_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfig">GoogleCesToolOpenApiToolApiAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret_version`<sup>Required</sup> <a name="client_secret_version" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion"></a>

```python
client_secret_version: str
```

- *Type:* str

---

##### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```python
oauth_grant_type: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolOpenApiToolApiAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfig">GoogleCesToolOpenApiToolApiAuthenticationOauthConfig</a>

---


### GoogleCesToolOpenApiToolApiAuthenticationOutputReference <a name="GoogleCesToolOpenApiToolApiAuthenticationOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList">GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.property.bearerTokenConfig">bearer_token_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList">GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList">GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.property.serviceAccountAuthConfig">service_account_auth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList">GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig">service_agent_id_token_auth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList">GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthentication">GoogleCesToolOpenApiToolApiAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_config`<sup>Required</sup> <a name="api_key_config" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.property.apiKeyConfig"></a>

```python
api_key_config: GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList">GoogleCesToolOpenApiToolApiAuthenticationApiKeyConfigList</a>

---

##### `bearer_token_config`<sup>Required</sup> <a name="bearer_token_config" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.property.bearerTokenConfig"></a>

```python
bearer_token_config: GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList">GoogleCesToolOpenApiToolApiAuthenticationBearerTokenConfigList</a>

---

##### `oauth_config`<sup>Required</sup> <a name="oauth_config" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.property.oauthConfig"></a>

```python
oauth_config: GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList">GoogleCesToolOpenApiToolApiAuthenticationOauthConfigList</a>

---

##### `service_account_auth_config`<sup>Required</sup> <a name="service_account_auth_config" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.property.serviceAccountAuthConfig"></a>

```python
service_account_auth_config: GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList">GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList</a>

---

##### `service_agent_id_token_auth_config`<sup>Required</sup> <a name="service_agent_id_token_auth_config" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig"></a>

```python
service_agent_id_token_auth_config: GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList">GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolOpenApiToolApiAuthentication
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthentication">GoogleCesToolOpenApiToolApiAuthentication</a>

---


### GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList <a name="GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference <a name="GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig">GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig">GoogleCesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig</a>

---


### GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList <a name="GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference <a name="GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---


### GoogleCesToolOpenApiToolList <a name="GoogleCesToolOpenApiToolList" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesToolOpenApiToolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCesToolOpenApiToolOutputReference <a name="GoogleCesToolOpenApiToolOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.property.apiAuthentication">api_authentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList">GoogleCesToolOpenApiToolApiAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.property.ignoreUnknownFields">ignore_unknown_fields</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.property.openApiSchema">open_api_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList">GoogleCesToolOpenApiToolServiceDirectoryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList">GoogleCesToolOpenApiToolTlsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiTool">GoogleCesToolOpenApiTool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_authentication`<sup>Required</sup> <a name="api_authentication" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.property.apiAuthentication"></a>

```python
api_authentication: GoogleCesToolOpenApiToolApiAuthenticationList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolApiAuthenticationList">GoogleCesToolOpenApiToolApiAuthenticationList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ignore_unknown_fields`<sup>Required</sup> <a name="ignore_unknown_fields" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.property.ignoreUnknownFields"></a>

```python
ignore_unknown_fields: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `open_api_schema`<sup>Required</sup> <a name="open_api_schema" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.property.openApiSchema"></a>

```python
open_api_schema: str
```

- *Type:* str

---

##### `service_directory_config`<sup>Required</sup> <a name="service_directory_config" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.property.serviceDirectoryConfig"></a>

```python
service_directory_config: GoogleCesToolOpenApiToolServiceDirectoryConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList">GoogleCesToolOpenApiToolServiceDirectoryConfigList</a>

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.property.tlsConfig"></a>

```python
tls_config: GoogleCesToolOpenApiToolTlsConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList">GoogleCesToolOpenApiToolTlsConfigList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolOpenApiTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiTool">GoogleCesToolOpenApiTool</a>

---


### GoogleCesToolOpenApiToolServiceDirectoryConfigList <a name="GoogleCesToolOpenApiToolServiceDirectoryConfigList" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference <a name="GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfig">GoogleCesToolOpenApiToolServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolOpenApiToolServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolServiceDirectoryConfig">GoogleCesToolOpenApiToolServiceDirectoryConfig</a>

---


### GoogleCesToolOpenApiToolTlsConfigCaCertsList <a name="GoogleCesToolOpenApiToolTlsConfigCaCertsList" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference <a name="GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.property.cert">cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCerts">GoogleCesToolOpenApiToolTlsConfigCaCerts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.property.cert"></a>

```python
cert: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolOpenApiToolTlsConfigCaCerts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCerts">GoogleCesToolOpenApiToolTlsConfigCaCerts</a>

---


### GoogleCesToolOpenApiToolTlsConfigList <a name="GoogleCesToolOpenApiToolTlsConfigList" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolTlsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesToolOpenApiToolTlsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCesToolOpenApiToolTlsConfigOutputReference <a name="GoogleCesToolOpenApiToolTlsConfigOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.property.caCerts">ca_certs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList">GoogleCesToolOpenApiToolTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfig">GoogleCesToolOpenApiToolTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.property.caCerts"></a>

```python
ca_certs: GoogleCesToolOpenApiToolTlsConfigCaCertsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigCaCertsList">GoogleCesToolOpenApiToolTlsConfigCaCertsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolOpenApiToolTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolOpenApiToolTlsConfig">GoogleCesToolOpenApiToolTlsConfig</a>

---


### GoogleCesToolPythonFunctionOutputReference <a name="GoogleCesToolPythonFunctionOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolPythonFunctionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.resetPythonCode">reset_python_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_python_code` <a name="reset_python_code" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.resetPythonCode"></a>

```python
def reset_python_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunction">GoogleCesToolPythonFunction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunctionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolPythonFunction
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolPythonFunction">GoogleCesToolPythonFunction</a>

---


### GoogleCesToolSystemToolList <a name="GoogleCesToolSystemToolList" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolSystemToolList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesToolSystemToolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCesToolSystemToolOutputReference <a name="GoogleCesToolSystemToolOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolSystemToolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemTool">GoogleCesToolSystemTool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemToolOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolSystemTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolSystemTool">GoogleCesToolSystemTool</a>

---


### GoogleCesToolTimeoutsOutputReference <a name="GoogleCesToolTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_tool

googleCesTool.GoogleCesToolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeouts">GoogleCesToolTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesToolTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesTool.GoogleCesToolTimeouts">GoogleCesToolTimeouts</a>

---



