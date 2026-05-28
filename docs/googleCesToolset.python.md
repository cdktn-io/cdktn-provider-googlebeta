# `googleCesToolset` Submodule <a name="`googleCesToolset` Submodule" id="@cdktn/provider-google-beta.googleCesToolset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesToolset <a name="GoogleCesToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset google_ces_toolset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolset(
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
  toolset_id: str,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  execution_type: str = None,
  id: str = None,
  mcp_toolset: GoogleCesToolsetMcpToolset = None,
  open_api_toolset: GoogleCesToolsetOpenApiToolset = None,
  project: str = None,
  timeouts: GoogleCesToolsetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.toolsetId">toolset_id</a></code> | <code>str</code> | The ID to use for the toolset, which will become the final component of the toolset's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the toolset. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the toolset. Must be unique within the same app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.executionType">execution_type</a></code> | <code>str</code> | Possible values: SYNCHRONOUS ASYNCHRONOUS. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#id GoogleCesToolset#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.mcpToolset">mcp_toolset</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset">GoogleCesToolsetMcpToolset</a></code> | mcp_toolset block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.openApiToolset">open_api_toolset</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset">GoogleCesToolsetOpenApiToolset</a></code> | open_api_toolset block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#project GoogleCesToolset#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts">GoogleCesToolsetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.app"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#app GoogleCesToolset#app}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#location GoogleCesToolset#location}

---

##### `toolset_id`<sup>Required</sup> <a name="toolset_id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.toolsetId"></a>

- *Type:* str

The ID to use for the toolset, which will become the final component of the toolset's resource name.

If not provided, a unique ID will be
automatically assigned for the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#toolset_id GoogleCesToolset#toolset_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#deletion_policy GoogleCesToolset#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.description"></a>

- *Type:* str

The description of the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#description GoogleCesToolset#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the toolset. Must be unique within the same app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#display_name GoogleCesToolset#display_name}

---

##### `execution_type`<sup>Optional</sup> <a name="execution_type" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.executionType"></a>

- *Type:* str

Possible values: SYNCHRONOUS ASYNCHRONOUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#execution_type GoogleCesToolset#execution_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#id GoogleCesToolset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mcp_toolset`<sup>Optional</sup> <a name="mcp_toolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.mcpToolset"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset">GoogleCesToolsetMcpToolset</a>

mcp_toolset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#mcp_toolset GoogleCesToolset#mcp_toolset}

---

##### `open_api_toolset`<sup>Optional</sup> <a name="open_api_toolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.openApiToolset"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset">GoogleCesToolsetOpenApiToolset</a>

open_api_toolset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#open_api_toolset GoogleCesToolset#open_api_toolset}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#project GoogleCesToolset#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts">GoogleCesToolsetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#timeouts GoogleCesToolset#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putMcpToolset">put_mcp_toolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putOpenApiToolset">put_open_api_toolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetExecutionType">reset_execution_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetMcpToolset">reset_mcp_toolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetOpenApiToolset">reset_open_api_toolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_mcp_toolset` <a name="put_mcp_toolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putMcpToolset"></a>

```python
def put_mcp_toolset(
  server_address: str,
  api_authentication: GoogleCesToolsetMcpToolsetApiAuthentication = None,
  custom_headers: typing.Mapping[str] = None,
  service_directory_config: GoogleCesToolsetMcpToolsetServiceDirectoryConfig = None,
  tls_config: GoogleCesToolsetMcpToolsetTlsConfig = None
) -> None
```

###### `server_address`<sup>Required</sup> <a name="server_address" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putMcpToolset.parameter.serverAddress"></a>

- *Type:* str

The address of the MCP server, for example, "https://example.com/mcp/". If the server is built with the MCP SDK, the url should be suffixed with "/mcp/". Only Streamable HTTP transport based servers are supported. See https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#server_address GoogleCesToolset#server_address}

---

###### `api_authentication`<sup>Optional</sup> <a name="api_authentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putMcpToolset.parameter.apiAuthentication"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication">GoogleCesToolsetMcpToolsetApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#api_authentication GoogleCesToolset#api_authentication}

---

###### `custom_headers`<sup>Optional</sup> <a name="custom_headers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putMcpToolset.parameter.customHeaders"></a>

- *Type:* typing.Mapping[str]

The custom headers to send in the request to the MCP server.

The values
must be in the format '$context.variables.<name_of_variable>' and can be
set in the session variables. See
https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/tool/open-api#openapi-injection
for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#custom_headers GoogleCesToolset#custom_headers}

---

###### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putMcpToolset.parameter.serviceDirectoryConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig">GoogleCesToolsetMcpToolsetServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#service_directory_config GoogleCesToolset#service_directory_config}

---

###### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putMcpToolset.parameter.tlsConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig">GoogleCesToolsetMcpToolsetTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#tls_config GoogleCesToolset#tls_config}

---

##### `put_open_api_toolset` <a name="put_open_api_toolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putOpenApiToolset"></a>

```python
def put_open_api_toolset(
  open_api_schema: str,
  api_authentication: GoogleCesToolsetOpenApiToolsetApiAuthentication = None,
  ignore_unknown_fields: bool | IResolvable = None,
  service_directory_config: GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig = None,
  tls_config: GoogleCesToolsetOpenApiToolsetTlsConfig = None
) -> None
```

###### `open_api_schema`<sup>Required</sup> <a name="open_api_schema" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putOpenApiToolset.parameter.openApiSchema"></a>

- *Type:* str

The OpenAPI schema of the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#open_api_schema GoogleCesToolset#open_api_schema}

---

###### `api_authentication`<sup>Optional</sup> <a name="api_authentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putOpenApiToolset.parameter.apiAuthentication"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication">GoogleCesToolsetOpenApiToolsetApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#api_authentication GoogleCesToolset#api_authentication}

---

###### `ignore_unknown_fields`<sup>Optional</sup> <a name="ignore_unknown_fields" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putOpenApiToolset.parameter.ignoreUnknownFields"></a>

- *Type:* bool | cdktn.IResolvable

If true, the agent will ignore unknown fields in the API response for all operations defined in the OpenAPI schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#ignore_unknown_fields GoogleCesToolset#ignore_unknown_fields}

---

###### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putOpenApiToolset.parameter.serviceDirectoryConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#service_directory_config GoogleCesToolset#service_directory_config}

---

###### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putOpenApiToolset.parameter.tlsConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig">GoogleCesToolsetOpenApiToolsetTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#tls_config GoogleCesToolset#tls_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#create GoogleCesToolset#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#delete GoogleCesToolset#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#update GoogleCesToolset#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_execution_type` <a name="reset_execution_type" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetExecutionType"></a>

```python
def reset_execution_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mcp_toolset` <a name="reset_mcp_toolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetMcpToolset"></a>

```python
def reset_mcp_toolset() -> None
```

##### `reset_open_api_toolset` <a name="reset_open_api_toolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetOpenApiToolset"></a>

```python
def reset_open_api_toolset() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleCesToolset resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleCesToolset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCesToolset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCesToolset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesToolset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.mcpToolset">mcp_toolset</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference">GoogleCesToolsetMcpToolsetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.openApiToolset">open_api_toolset</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference">GoogleCesToolsetOpenApiToolsetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference">GoogleCesToolsetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.appInput">app_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.executionTypeInput">execution_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.mcpToolsetInput">mcp_toolset_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset">GoogleCesToolsetMcpToolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.openApiToolsetInput">open_api_toolset_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset">GoogleCesToolsetOpenApiToolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts">GoogleCesToolsetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.toolsetIdInput">toolset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.app">app</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.executionType">execution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.toolsetId">toolset_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `mcp_toolset`<sup>Required</sup> <a name="mcp_toolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.mcpToolset"></a>

```python
mcp_toolset: GoogleCesToolsetMcpToolsetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference">GoogleCesToolsetMcpToolsetOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `open_api_toolset`<sup>Required</sup> <a name="open_api_toolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.openApiToolset"></a>

```python
open_api_toolset: GoogleCesToolsetOpenApiToolsetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference">GoogleCesToolsetOpenApiToolsetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.timeouts"></a>

```python
timeouts: GoogleCesToolsetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference">GoogleCesToolsetTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `app_input`<sup>Optional</sup> <a name="app_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.appInput"></a>

```python
app_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `execution_type_input`<sup>Optional</sup> <a name="execution_type_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.executionTypeInput"></a>

```python
execution_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mcp_toolset_input`<sup>Optional</sup> <a name="mcp_toolset_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.mcpToolsetInput"></a>

```python
mcp_toolset_input: GoogleCesToolsetMcpToolset
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset">GoogleCesToolsetMcpToolset</a>

---

##### `open_api_toolset_input`<sup>Optional</sup> <a name="open_api_toolset_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.openApiToolsetInput"></a>

```python
open_api_toolset_input: GoogleCesToolsetOpenApiToolset
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset">GoogleCesToolsetOpenApiToolset</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleCesToolsetTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts">GoogleCesToolsetTimeouts</a>

---

##### `toolset_id_input`<sup>Optional</sup> <a name="toolset_id_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.toolsetIdInput"></a>

```python
toolset_id_input: str
```

- *Type:* str

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.app"></a>

```python
app: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `execution_type`<sup>Required</sup> <a name="execution_type" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.executionType"></a>

```python
execution_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `toolset_id`<sup>Required</sup> <a name="toolset_id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.toolsetId"></a>

```python
toolset_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesToolsetConfig <a name="GoogleCesToolsetConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app: str,
  location: str,
  toolset_id: str,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  execution_type: str = None,
  id: str = None,
  mcp_toolset: GoogleCesToolsetMcpToolset = None,
  open_api_toolset: GoogleCesToolsetOpenApiToolset = None,
  project: str = None,
  timeouts: GoogleCesToolsetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.toolsetId">toolset_id</a></code> | <code>str</code> | The ID to use for the toolset, which will become the final component of the toolset's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.description">description</a></code> | <code>str</code> | The description of the toolset. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the toolset. Must be unique within the same app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.executionType">execution_type</a></code> | <code>str</code> | Possible values: SYNCHRONOUS ASYNCHRONOUS. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#id GoogleCesToolset#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.mcpToolset">mcp_toolset</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset">GoogleCesToolsetMcpToolset</a></code> | mcp_toolset block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.openApiToolset">open_api_toolset</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset">GoogleCesToolsetOpenApiToolset</a></code> | open_api_toolset block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#project GoogleCesToolset#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts">GoogleCesToolsetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.app"></a>

```python
app: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#app GoogleCesToolset#app}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#location GoogleCesToolset#location}

---

##### `toolset_id`<sup>Required</sup> <a name="toolset_id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.toolsetId"></a>

```python
toolset_id: str
```

- *Type:* str

The ID to use for the toolset, which will become the final component of the toolset's resource name.

If not provided, a unique ID will be
automatically assigned for the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#toolset_id GoogleCesToolset#toolset_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#deletion_policy GoogleCesToolset#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#description GoogleCesToolset#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the toolset. Must be unique within the same app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#display_name GoogleCesToolset#display_name}

---

##### `execution_type`<sup>Optional</sup> <a name="execution_type" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.executionType"></a>

```python
execution_type: str
```

- *Type:* str

Possible values: SYNCHRONOUS ASYNCHRONOUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#execution_type GoogleCesToolset#execution_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#id GoogleCesToolset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mcp_toolset`<sup>Optional</sup> <a name="mcp_toolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.mcpToolset"></a>

```python
mcp_toolset: GoogleCesToolsetMcpToolset
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset">GoogleCesToolsetMcpToolset</a>

mcp_toolset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#mcp_toolset GoogleCesToolset#mcp_toolset}

---

##### `open_api_toolset`<sup>Optional</sup> <a name="open_api_toolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.openApiToolset"></a>

```python
open_api_toolset: GoogleCesToolsetOpenApiToolset
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset">GoogleCesToolsetOpenApiToolset</a>

open_api_toolset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#open_api_toolset GoogleCesToolset#open_api_toolset}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#project GoogleCesToolset#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.timeouts"></a>

```python
timeouts: GoogleCesToolsetTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts">GoogleCesToolsetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#timeouts GoogleCesToolset#timeouts}

---

### GoogleCesToolsetMcpToolset <a name="GoogleCesToolsetMcpToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetMcpToolset(
  server_address: str,
  api_authentication: GoogleCesToolsetMcpToolsetApiAuthentication = None,
  custom_headers: typing.Mapping[str] = None,
  service_directory_config: GoogleCesToolsetMcpToolsetServiceDirectoryConfig = None,
  tls_config: GoogleCesToolsetMcpToolsetTlsConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.serverAddress">server_address</a></code> | <code>str</code> | The address of the MCP server, for example, "https://example.com/mcp/". If the server is built with the MCP SDK, the url should be suffixed with "/mcp/". Only Streamable HTTP transport based servers are supported. See https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http for more details. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.apiAuthentication">api_authentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication">GoogleCesToolsetMcpToolsetApiAuthentication</a></code> | api_authentication block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.customHeaders">custom_headers</a></code> | <code>typing.Mapping[str]</code> | The custom headers to send in the request to the MCP server. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig">GoogleCesToolsetMcpToolsetServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig">GoogleCesToolsetMcpToolsetTlsConfig</a></code> | tls_config block. |

---

##### `server_address`<sup>Required</sup> <a name="server_address" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.serverAddress"></a>

```python
server_address: str
```

- *Type:* str

The address of the MCP server, for example, "https://example.com/mcp/". If the server is built with the MCP SDK, the url should be suffixed with "/mcp/". Only Streamable HTTP transport based servers are supported. See https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#server_address GoogleCesToolset#server_address}

---

##### `api_authentication`<sup>Optional</sup> <a name="api_authentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.apiAuthentication"></a>

```python
api_authentication: GoogleCesToolsetMcpToolsetApiAuthentication
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication">GoogleCesToolsetMcpToolsetApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#api_authentication GoogleCesToolset#api_authentication}

---

##### `custom_headers`<sup>Optional</sup> <a name="custom_headers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.customHeaders"></a>

```python
custom_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The custom headers to send in the request to the MCP server.

The values
must be in the format '$context.variables.<name_of_variable>' and can be
set in the session variables. See
https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/tool/open-api#openapi-injection
for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#custom_headers GoogleCesToolset#custom_headers}

---

##### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.serviceDirectoryConfig"></a>

```python
service_directory_config: GoogleCesToolsetMcpToolsetServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig">GoogleCesToolsetMcpToolsetServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#service_directory_config GoogleCesToolset#service_directory_config}

---

##### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.tlsConfig"></a>

```python
tls_config: GoogleCesToolsetMcpToolsetTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig">GoogleCesToolsetMcpToolsetTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#tls_config GoogleCesToolset#tls_config}

---

### GoogleCesToolsetMcpToolsetApiAuthentication <a name="GoogleCesToolsetMcpToolsetApiAuthentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication(
  api_key_config: GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig = None,
  bearer_token_config: GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig = None,
  oauth_config: GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig = None,
  service_account_auth_config: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig = None,
  service_agent_id_token_auth_config: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.bearerTokenConfig">bearer_token_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.serviceAccountAuthConfig">service_account_auth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | service_account_auth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.serviceAgentIdTokenAuthConfig">service_agent_id_token_auth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | service_agent_id_token_auth_config block. |

---

##### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.apiKeyConfig"></a>

```python
api_key_config: GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#api_key_config GoogleCesToolset#api_key_config}

---

##### `bearer_token_config`<sup>Optional</sup> <a name="bearer_token_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.bearerTokenConfig"></a>

```python
bearer_token_config: GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#bearer_token_config GoogleCesToolset#bearer_token_config}

---

##### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.oauthConfig"></a>

```python
oauth_config: GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#oauth_config GoogleCesToolset#oauth_config}

---

##### `service_account_auth_config`<sup>Optional</sup> <a name="service_account_auth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.serviceAccountAuthConfig"></a>

```python
service_account_auth_config: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#service_account_auth_config GoogleCesToolset#service_account_auth_config}

---

##### `service_agent_id_token_auth_config`<sup>Optional</sup> <a name="service_agent_id_token_auth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.serviceAgentIdTokenAuthConfig"></a>

```python
service_agent_id_token_auth_config: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

service_agent_id_token_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#service_agent_id_token_auth_config GoogleCesToolset#service_agent_id_token_auth_config}

---

### GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig <a name="GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig(
  api_key_secret_version: str,
  key_name: str,
  request_location: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.apiKeySecretVersion">api_key_secret_version</a></code> | <code>str</code> | The name of the SecretManager secret version resource storing the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.keyName">key_name</a></code> | <code>str</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.requestLocation">request_location</a></code> | <code>str</code> | Key location in the request. |

---

##### `api_key_secret_version`<sup>Required</sup> <a name="api_key_secret_version" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.apiKeySecretVersion"></a>

```python
api_key_secret_version: str
```

- *Type:* str

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#api_key_secret_version GoogleCesToolset#api_key_secret_version}

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#key_name GoogleCesToolset#key_name}

---

##### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.requestLocation"></a>

```python
request_location: str
```

- *Type:* str

Key location in the request.

For API key auth on MCP toolsets,
the API key can only be sent in the request header.
Possible values:
HEADER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#request_location GoogleCesToolset#request_location}

---

### GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig <a name="GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig(
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#token GoogleCesToolset#token}. |

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#token GoogleCesToolset#token}.

---

### GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig <a name="GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig(
  client_id: str,
  client_secret_version: str,
  oauth_grant_type: str,
  token_endpoint: str,
  scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.clientId">client_id</a></code> | <code>str</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.clientSecretVersion">client_secret_version</a></code> | <code>str</code> | The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.oauthGrantType">oauth_grant_type</a></code> | <code>str</code> | OAuth grant types. Possible values: CLIENT_CREDENTIAL. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | The OAuth scopes to grant. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#client_id GoogleCesToolset#client_id}

---

##### `client_secret_version`<sup>Required</sup> <a name="client_secret_version" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.clientSecretVersion"></a>

```python
client_secret_version: str
```

- *Type:* str

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#client_secret_version GoogleCesToolset#client_secret_version}

---

##### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.oauthGrantType"></a>

```python
oauth_grant_type: str
```

- *Type:* str

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#oauth_grant_type GoogleCesToolset#oauth_grant_type}

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#token_endpoint GoogleCesToolset#token_endpoint}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#scopes GoogleCesToolset#scopes}

---

### GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig <a name="GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig(
  service_account: str,
  scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | The email address of the service account used for authenticatation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used. |

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The email address of the service account used for authenticatation.

CES
uses this service account to exchange an access token and the access token
is then sent in the 'Authorization' header of the request.

The service account must have the
'roles/iam.serviceAccountTokenCreator' role granted to the
CES service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#service_account GoogleCesToolset#service_account}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#scopes GoogleCesToolset#scopes}

---

### GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig <a name="GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig()
```


### GoogleCesToolsetMcpToolsetServiceDirectoryConfig <a name="GoogleCesToolsetMcpToolsetServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig(
  service: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig.property.service">service</a></code> | <code>str</code> | The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig.property.service"></a>

```python
service: str
```

- *Type:* str

The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#service GoogleCesToolset#service}

---

### GoogleCesToolsetMcpToolsetTlsConfig <a name="GoogleCesToolsetMcpToolsetTlsConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig(
  ca_certs: IResolvable | typing.List[GoogleCesToolsetMcpToolsetTlsConfigCaCerts]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig.property.caCerts">ca_certs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>]</code> | ca_certs block. |

---

##### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig.property.caCerts"></a>

```python
ca_certs: IResolvable | typing.List[GoogleCesToolsetMcpToolsetTlsConfigCaCerts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#ca_certs GoogleCesToolset#ca_certs}

---

### GoogleCesToolsetMcpToolsetTlsConfigCaCerts <a name="GoogleCesToolsetMcpToolsetTlsConfigCaCerts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts(
  cert: str,
  display_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts.property.cert">cert</a></code> | <code>str</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts.property.displayName">display_name</a></code> | <code>str</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts.property.cert"></a>

```python
cert: str
```

- *Type:* str

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store. If this
is empty or unspecified, CES will use Google's default trust
store to verify certificates. N.B. Make sure the HTTPS server
certificates are signed with "subject alt name". For instance a
certificate can be self-signed using the following command,
openssl x509 -req -days 200 -in example.com.csr \
-signkey example.com.key \
-out example.com.crt \
-extfile <(printf "\nsubjectAltName='DNS:www.example.com'")

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#cert GoogleCesToolset#cert}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#display_name GoogleCesToolset#display_name}

---

### GoogleCesToolsetOpenApiToolset <a name="GoogleCesToolsetOpenApiToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetOpenApiToolset(
  open_api_schema: str,
  api_authentication: GoogleCesToolsetOpenApiToolsetApiAuthentication = None,
  ignore_unknown_fields: bool | IResolvable = None,
  service_directory_config: GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig = None,
  tls_config: GoogleCesToolsetOpenApiToolsetTlsConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.openApiSchema">open_api_schema</a></code> | <code>str</code> | The OpenAPI schema of the toolset. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.apiAuthentication">api_authentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication">GoogleCesToolsetOpenApiToolsetApiAuthentication</a></code> | api_authentication block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.ignoreUnknownFields">ignore_unknown_fields</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the agent will ignore unknown fields in the API response for all operations defined in the OpenAPI schema. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig">GoogleCesToolsetOpenApiToolsetTlsConfig</a></code> | tls_config block. |

---

##### `open_api_schema`<sup>Required</sup> <a name="open_api_schema" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.openApiSchema"></a>

```python
open_api_schema: str
```

- *Type:* str

The OpenAPI schema of the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#open_api_schema GoogleCesToolset#open_api_schema}

---

##### `api_authentication`<sup>Optional</sup> <a name="api_authentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.apiAuthentication"></a>

```python
api_authentication: GoogleCesToolsetOpenApiToolsetApiAuthentication
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication">GoogleCesToolsetOpenApiToolsetApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#api_authentication GoogleCesToolset#api_authentication}

---

##### `ignore_unknown_fields`<sup>Optional</sup> <a name="ignore_unknown_fields" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.ignoreUnknownFields"></a>

```python
ignore_unknown_fields: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, the agent will ignore unknown fields in the API response for all operations defined in the OpenAPI schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#ignore_unknown_fields GoogleCesToolset#ignore_unknown_fields}

---

##### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.serviceDirectoryConfig"></a>

```python
service_directory_config: GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#service_directory_config GoogleCesToolset#service_directory_config}

---

##### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.tlsConfig"></a>

```python
tls_config: GoogleCesToolsetOpenApiToolsetTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig">GoogleCesToolsetOpenApiToolsetTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#tls_config GoogleCesToolset#tls_config}

---

### GoogleCesToolsetOpenApiToolsetApiAuthentication <a name="GoogleCesToolsetOpenApiToolsetApiAuthentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication(
  api_key_config: GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig = None,
  bearer_token_config: GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig = None,
  oauth_config: GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig = None,
  service_account_auth_config: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig = None,
  service_agent_id_token_auth_config: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.bearerTokenConfig">bearer_token_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.serviceAccountAuthConfig">service_account_auth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | service_account_auth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.serviceAgentIdTokenAuthConfig">service_agent_id_token_auth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | service_agent_id_token_auth_config block. |

---

##### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.apiKeyConfig"></a>

```python
api_key_config: GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#api_key_config GoogleCesToolset#api_key_config}

---

##### `bearer_token_config`<sup>Optional</sup> <a name="bearer_token_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.bearerTokenConfig"></a>

```python
bearer_token_config: GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#bearer_token_config GoogleCesToolset#bearer_token_config}

---

##### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.oauthConfig"></a>

```python
oauth_config: GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#oauth_config GoogleCesToolset#oauth_config}

---

##### `service_account_auth_config`<sup>Optional</sup> <a name="service_account_auth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.serviceAccountAuthConfig"></a>

```python
service_account_auth_config: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#service_account_auth_config GoogleCesToolset#service_account_auth_config}

---

##### `service_agent_id_token_auth_config`<sup>Optional</sup> <a name="service_agent_id_token_auth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.serviceAgentIdTokenAuthConfig"></a>

```python
service_agent_id_token_auth_config: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

service_agent_id_token_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#service_agent_id_token_auth_config GoogleCesToolset#service_agent_id_token_auth_config}

---

### GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig(
  api_key_secret_version: str,
  key_name: str,
  request_location: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.apiKeySecretVersion">api_key_secret_version</a></code> | <code>str</code> | The name of the SecretManager secret version resource storing the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.keyName">key_name</a></code> | <code>str</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.requestLocation">request_location</a></code> | <code>str</code> | Key location in the request. Possible values: HEADER QUERY_STRING. |

---

##### `api_key_secret_version`<sup>Required</sup> <a name="api_key_secret_version" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.apiKeySecretVersion"></a>

```python
api_key_secret_version: str
```

- *Type:* str

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#api_key_secret_version GoogleCesToolset#api_key_secret_version}

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#key_name GoogleCesToolset#key_name}

---

##### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.requestLocation"></a>

```python
request_location: str
```

- *Type:* str

Key location in the request. Possible values: HEADER QUERY_STRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#request_location GoogleCesToolset#request_location}

---

### GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig(
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#token GoogleCesToolset#token}. |

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#token GoogleCesToolset#token}.

---

### GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig(
  client_id: str,
  client_secret_version: str,
  oauth_grant_type: str,
  token_endpoint: str,
  scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.clientId">client_id</a></code> | <code>str</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.clientSecretVersion">client_secret_version</a></code> | <code>str</code> | The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.oauthGrantType">oauth_grant_type</a></code> | <code>str</code> | OAuth grant types. Possible values: CLIENT_CREDENTIAL. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | The OAuth scopes to grant. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#client_id GoogleCesToolset#client_id}

---

##### `client_secret_version`<sup>Required</sup> <a name="client_secret_version" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.clientSecretVersion"></a>

```python
client_secret_version: str
```

- *Type:* str

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#client_secret_version GoogleCesToolset#client_secret_version}

---

##### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.oauthGrantType"></a>

```python
oauth_grant_type: str
```

- *Type:* str

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#oauth_grant_type GoogleCesToolset#oauth_grant_type}

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#token_endpoint GoogleCesToolset#token_endpoint}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#scopes GoogleCesToolset#scopes}

---

### GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig(
  service_account: str,
  scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | The email address of the service account used for authenticatation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used. |

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The email address of the service account used for authenticatation.

CES
uses this service account to exchange an access token and the access token
is then sent in the 'Authorization' header of the request.

The service account must have the
'roles/iam.serviceAccountTokenCreator' role granted to the
CES service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#service_account GoogleCesToolset#service_account}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#scopes GoogleCesToolset#scopes}

---

### GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig()
```


### GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig <a name="GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig(
  service: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig.property.service">service</a></code> | <code>str</code> | The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig.property.service"></a>

```python
service: str
```

- *Type:* str

The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#service GoogleCesToolset#service}

---

### GoogleCesToolsetOpenApiToolsetTlsConfig <a name="GoogleCesToolsetOpenApiToolsetTlsConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig(
  ca_certs: IResolvable | typing.List[GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig.property.caCerts">ca_certs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>]</code> | ca_certs block. |

---

##### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig.property.caCerts"></a>

```python
ca_certs: IResolvable | typing.List[GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#ca_certs GoogleCesToolset#ca_certs}

---

### GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts <a name="GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts(
  cert: str,
  display_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts.property.cert">cert</a></code> | <code>str</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts.property.displayName">display_name</a></code> | <code>str</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts.property.cert"></a>

```python
cert: str
```

- *Type:* str

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store. If this
is empty or unspecified, CES will use Google's default trust
store to verify certificates. N.B. Make sure the HTTPS server
certificates are signed with "subject alt name". For instance a
certificate can be self-signed using the following command,
openssl x509 -req -days 200 -in example.com.csr \
-signkey example.com.key \
-out example.com.crt \
-extfile <(printf "\nsubjectAltName='DNS:www.example.com'")

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#cert GoogleCesToolset#cert}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#display_name GoogleCesToolset#display_name}

---

### GoogleCesToolsetTimeouts <a name="GoogleCesToolsetTimeouts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#create GoogleCesToolset#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#delete GoogleCesToolset#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#update GoogleCesToolset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#create GoogleCesToolset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#delete GoogleCesToolset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#update GoogleCesToolset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference <a name="GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput">api_key_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">request_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion">api_key_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocation">request_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_secret_version_input`<sup>Optional</sup> <a name="api_key_secret_version_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```python
api_key_secret_version_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `request_location_input`<sup>Optional</sup> <a name="request_location_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```python
request_location_input: str
```

- *Type:* str

---

##### `api_key_secret_version`<sup>Required</sup> <a name="api_key_secret_version" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```python
api_key_secret_version: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```python
request_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a>

---


### GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference <a name="GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resetToken">reset_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_token` <a name="reset_token" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```python
def reset_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a>

---


### GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference <a name="GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput">client_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauth_grant_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion">client_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauth_grant_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_version_input`<sup>Optional</sup> <a name="client_secret_version_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput"></a>

```python
client_secret_version_input: str
```

- *Type:* str

---

##### `oauth_grant_type_input`<sup>Optional</sup> <a name="oauth_grant_type_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```python
oauth_grant_type_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret_version`<sup>Required</sup> <a name="client_secret_version" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion"></a>

```python
client_secret_version: str
```

- *Type:* str

---

##### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```python
oauth_grant_type: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig</a>

---


### GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference <a name="GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putApiKeyConfig">put_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putBearerTokenConfig">put_bearer_token_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putOauthConfig">put_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig">put_service_account_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig">put_service_agent_id_token_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetApiKeyConfig">reset_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetBearerTokenConfig">reset_bearer_token_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetOauthConfig">reset_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetServiceAccountAuthConfig">reset_service_account_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetServiceAgentIdTokenAuthConfig">reset_service_agent_id_token_auth_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key_config` <a name="put_api_key_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putApiKeyConfig"></a>

```python
def put_api_key_config(
  api_key_secret_version: str,
  key_name: str,
  request_location: str
) -> None
```

###### `api_key_secret_version`<sup>Required</sup> <a name="api_key_secret_version" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putApiKeyConfig.parameter.apiKeySecretVersion"></a>

- *Type:* str

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#api_key_secret_version GoogleCesToolset#api_key_secret_version}

---

###### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putApiKeyConfig.parameter.keyName"></a>

- *Type:* str

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#key_name GoogleCesToolset#key_name}

---

###### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putApiKeyConfig.parameter.requestLocation"></a>

- *Type:* str

Key location in the request.

For API key auth on MCP toolsets,
the API key can only be sent in the request header.
Possible values:
HEADER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#request_location GoogleCesToolset#request_location}

---

##### `put_bearer_token_config` <a name="put_bearer_token_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putBearerTokenConfig"></a>

```python
def put_bearer_token_config(
  token: str = None
) -> None
```

###### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putBearerTokenConfig.parameter.token"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#token GoogleCesToolset#token}.

---

##### `put_oauth_config` <a name="put_oauth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putOauthConfig"></a>

```python
def put_oauth_config(
  client_id: str,
  client_secret_version: str,
  oauth_grant_type: str,
  token_endpoint: str,
  scopes: typing.List[str] = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.clientId"></a>

- *Type:* str

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#client_id GoogleCesToolset#client_id}

---

###### `client_secret_version`<sup>Required</sup> <a name="client_secret_version" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.clientSecretVersion"></a>

- *Type:* str

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#client_secret_version GoogleCesToolset#client_secret_version}

---

###### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.oauthGrantType"></a>

- *Type:* str

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#oauth_grant_type GoogleCesToolset#oauth_grant_type}

---

###### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.tokenEndpoint"></a>

- *Type:* str

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#token_endpoint GoogleCesToolset#token_endpoint}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.scopes"></a>

- *Type:* typing.List[str]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#scopes GoogleCesToolset#scopes}

---

##### `put_service_account_auth_config` <a name="put_service_account_auth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig"></a>

```python
def put_service_account_auth_config(
  service_account: str,
  scopes: typing.List[str] = None
) -> None
```

###### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.serviceAccount"></a>

- *Type:* str

The email address of the service account used for authenticatation.

CES
uses this service account to exchange an access token and the access token
is then sent in the 'Authorization' header of the request.

The service account must have the
'roles/iam.serviceAccountTokenCreator' role granted to the
CES service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#service_account GoogleCesToolset#service_account}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.scopes"></a>

- *Type:* typing.List[str]

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#scopes GoogleCesToolset#scopes}

---

##### `put_service_agent_id_token_auth_config` <a name="put_service_agent_id_token_auth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig"></a>

```python
def put_service_agent_id_token_auth_config() -> None
```

##### `reset_api_key_config` <a name="reset_api_key_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetApiKeyConfig"></a>

```python
def reset_api_key_config() -> None
```

##### `reset_bearer_token_config` <a name="reset_bearer_token_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetBearerTokenConfig"></a>

```python
def reset_bearer_token_config() -> None
```

##### `reset_oauth_config` <a name="reset_oauth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetOauthConfig"></a>

```python
def reset_oauth_config() -> None
```

##### `reset_service_account_auth_config` <a name="reset_service_account_auth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetServiceAccountAuthConfig"></a>

```python
def reset_service_account_auth_config() -> None
```

##### `reset_service_agent_id_token_auth_config` <a name="reset_service_agent_id_token_auth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetServiceAgentIdTokenAuthConfig"></a>

```python
def reset_service_agent_id_token_auth_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.bearerTokenConfig">bearer_token_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfig">service_account_auth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig">service_agent_id_token_auth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.apiKeyConfigInput">api_key_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.bearerTokenConfigInput">bearer_token_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.oauthConfigInput">oauth_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput">service_account_auth_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfigInput">service_agent_id_token_auth_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication">GoogleCesToolsetMcpToolsetApiAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_config`<sup>Required</sup> <a name="api_key_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.apiKeyConfig"></a>

```python
api_key_config: GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearer_token_config`<sup>Required</sup> <a name="bearer_token_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.bearerTokenConfig"></a>

```python
bearer_token_config: GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauth_config`<sup>Required</sup> <a name="oauth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.oauthConfig"></a>

```python
oauth_config: GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference</a>

---

##### `service_account_auth_config`<sup>Required</sup> <a name="service_account_auth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfig"></a>

```python
service_account_auth_config: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference</a>

---

##### `service_agent_id_token_auth_config`<sup>Required</sup> <a name="service_agent_id_token_auth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig"></a>

```python
service_agent_id_token_auth_config: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference</a>

---

##### `api_key_config_input`<sup>Optional</sup> <a name="api_key_config_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```python
api_key_config_input: GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a>

---

##### `bearer_token_config_input`<sup>Optional</sup> <a name="bearer_token_config_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```python
bearer_token_config_input: GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a>

---

##### `oauth_config_input`<sup>Optional</sup> <a name="oauth_config_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.oauthConfigInput"></a>

```python
oauth_config_input: GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig</a>

---

##### `service_account_auth_config_input`<sup>Optional</sup> <a name="service_account_auth_config_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput"></a>

```python
service_account_auth_config_input: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a>

---

##### `service_agent_id_token_auth_config_input`<sup>Optional</sup> <a name="service_agent_id_token_auth_config_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfigInput"></a>

```python
service_agent_id_token_auth_config_input: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolsetMcpToolsetApiAuthentication
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication">GoogleCesToolsetMcpToolsetApiAuthentication</a>

---


### GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference <a name="GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a>

---


### GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference <a name="GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---


### GoogleCesToolsetMcpToolsetOutputReference <a name="GoogleCesToolsetMcpToolsetOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putApiAuthentication">put_api_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putServiceDirectoryConfig">put_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putTlsConfig">put_tls_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetApiAuthentication">reset_api_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetCustomHeaders">reset_custom_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetServiceDirectoryConfig">reset_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetTlsConfig">reset_tls_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_authentication` <a name="put_api_authentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putApiAuthentication"></a>

```python
def put_api_authentication(
  api_key_config: GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig = None,
  bearer_token_config: GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig = None,
  oauth_config: GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig = None,
  service_account_auth_config: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig = None,
  service_agent_id_token_auth_config: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig = None
) -> None
```

###### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putApiAuthentication.parameter.apiKeyConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#api_key_config GoogleCesToolset#api_key_config}

---

###### `bearer_token_config`<sup>Optional</sup> <a name="bearer_token_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putApiAuthentication.parameter.bearerTokenConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#bearer_token_config GoogleCesToolset#bearer_token_config}

---

###### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putApiAuthentication.parameter.oauthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#oauth_config GoogleCesToolset#oauth_config}

---

###### `service_account_auth_config`<sup>Optional</sup> <a name="service_account_auth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putApiAuthentication.parameter.serviceAccountAuthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#service_account_auth_config GoogleCesToolset#service_account_auth_config}

---

###### `service_agent_id_token_auth_config`<sup>Optional</sup> <a name="service_agent_id_token_auth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putApiAuthentication.parameter.serviceAgentIdTokenAuthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

service_agent_id_token_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#service_agent_id_token_auth_config GoogleCesToolset#service_agent_id_token_auth_config}

---

##### `put_service_directory_config` <a name="put_service_directory_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putServiceDirectoryConfig"></a>

```python
def put_service_directory_config(
  service: str
) -> None
```

###### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putServiceDirectoryConfig.parameter.service"></a>

- *Type:* str

The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#service GoogleCesToolset#service}

---

##### `put_tls_config` <a name="put_tls_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putTlsConfig"></a>

```python
def put_tls_config(
  ca_certs: IResolvable | typing.List[GoogleCesToolsetMcpToolsetTlsConfigCaCerts]
) -> None
```

###### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putTlsConfig.parameter.caCerts"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#ca_certs GoogleCesToolset#ca_certs}

---

##### `reset_api_authentication` <a name="reset_api_authentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetApiAuthentication"></a>

```python
def reset_api_authentication() -> None
```

##### `reset_custom_headers` <a name="reset_custom_headers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetCustomHeaders"></a>

```python
def reset_custom_headers() -> None
```

##### `reset_service_directory_config` <a name="reset_service_directory_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetServiceDirectoryConfig"></a>

```python
def reset_service_directory_config() -> None
```

##### `reset_tls_config` <a name="reset_tls_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetTlsConfig"></a>

```python
def reset_tls_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.apiAuthentication">api_authentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference">GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference">GoogleCesToolsetMcpToolsetTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.apiAuthenticationInput">api_authentication_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication">GoogleCesToolsetMcpToolsetApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.customHeadersInput">custom_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serverAddressInput">server_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serviceDirectoryConfigInput">service_directory_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig">GoogleCesToolsetMcpToolsetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.tlsConfigInput">tls_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig">GoogleCesToolsetMcpToolsetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.customHeaders">custom_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serverAddress">server_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset">GoogleCesToolsetMcpToolset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_authentication`<sup>Required</sup> <a name="api_authentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.apiAuthentication"></a>

```python
api_authentication: GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference</a>

---

##### `service_directory_config`<sup>Required</sup> <a name="service_directory_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serviceDirectoryConfig"></a>

```python
service_directory_config: GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference">GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference</a>

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.tlsConfig"></a>

```python
tls_config: GoogleCesToolsetMcpToolsetTlsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference">GoogleCesToolsetMcpToolsetTlsConfigOutputReference</a>

---

##### `api_authentication_input`<sup>Optional</sup> <a name="api_authentication_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.apiAuthenticationInput"></a>

```python
api_authentication_input: GoogleCesToolsetMcpToolsetApiAuthentication
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication">GoogleCesToolsetMcpToolsetApiAuthentication</a>

---

##### `custom_headers_input`<sup>Optional</sup> <a name="custom_headers_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.customHeadersInput"></a>

```python
custom_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `server_address_input`<sup>Optional</sup> <a name="server_address_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serverAddressInput"></a>

```python
server_address_input: str
```

- *Type:* str

---

##### `service_directory_config_input`<sup>Optional</sup> <a name="service_directory_config_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serviceDirectoryConfigInput"></a>

```python
service_directory_config_input: GoogleCesToolsetMcpToolsetServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig">GoogleCesToolsetMcpToolsetServiceDirectoryConfig</a>

---

##### `tls_config_input`<sup>Optional</sup> <a name="tls_config_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.tlsConfigInput"></a>

```python
tls_config_input: GoogleCesToolsetMcpToolsetTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig">GoogleCesToolsetMcpToolsetTlsConfig</a>

---

##### `custom_headers`<sup>Required</sup> <a name="custom_headers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.customHeaders"></a>

```python
custom_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `server_address`<sup>Required</sup> <a name="server_address" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serverAddress"></a>

```python
server_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolsetMcpToolset
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset">GoogleCesToolsetMcpToolset</a>

---


### GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference <a name="GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig">GoogleCesToolsetMcpToolsetServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolsetMcpToolsetServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig">GoogleCesToolsetMcpToolsetServiceDirectoryConfig</a>

---


### GoogleCesToolsetMcpToolsetTlsConfigCaCertsList <a name="GoogleCesToolsetMcpToolsetTlsConfigCaCertsList" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesToolsetMcpToolsetTlsConfigCaCerts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>]

---


### GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference <a name="GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.certInput">cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.cert">cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert_input`<sup>Optional</sup> <a name="cert_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.certInput"></a>

```python
cert_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.cert"></a>

```python
cert: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesToolsetMcpToolsetTlsConfigCaCerts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>

---


### GoogleCesToolsetMcpToolsetTlsConfigOutputReference <a name="GoogleCesToolsetMcpToolsetTlsConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.putCaCerts">put_ca_certs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ca_certs` <a name="put_ca_certs" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.putCaCerts"></a>

```python
def put_ca_certs(
  value: IResolvable | typing.List[GoogleCesToolsetMcpToolsetTlsConfigCaCerts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.caCerts">ca_certs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList">GoogleCesToolsetMcpToolsetTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.caCertsInput">ca_certs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig">GoogleCesToolsetMcpToolsetTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.caCerts"></a>

```python
ca_certs: GoogleCesToolsetMcpToolsetTlsConfigCaCertsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList">GoogleCesToolsetMcpToolsetTlsConfigCaCertsList</a>

---

##### `ca_certs_input`<sup>Optional</sup> <a name="ca_certs_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.caCertsInput"></a>

```python
ca_certs_input: IResolvable | typing.List[GoogleCesToolsetMcpToolsetTlsConfigCaCerts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolsetMcpToolsetTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig">GoogleCesToolsetMcpToolsetTlsConfig</a>

---


### GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput">api_key_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">request_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion">api_key_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocation">request_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_secret_version_input`<sup>Optional</sup> <a name="api_key_secret_version_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```python
api_key_secret_version_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `request_location_input`<sup>Optional</sup> <a name="request_location_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```python
request_location_input: str
```

- *Type:* str

---

##### `api_key_secret_version`<sup>Required</sup> <a name="api_key_secret_version" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```python
api_key_secret_version: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```python
request_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a>

---


### GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resetToken">reset_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_token` <a name="reset_token" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```python
def reset_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a>

---


### GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput">client_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauth_grant_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion">client_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauth_grant_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_version_input`<sup>Optional</sup> <a name="client_secret_version_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput"></a>

```python
client_secret_version_input: str
```

- *Type:* str

---

##### `oauth_grant_type_input`<sup>Optional</sup> <a name="oauth_grant_type_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```python
oauth_grant_type_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret_version`<sup>Required</sup> <a name="client_secret_version" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion"></a>

```python
client_secret_version: str
```

- *Type:* str

---

##### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```python
oauth_grant_type: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a>

---


### GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putApiKeyConfig">put_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putBearerTokenConfig">put_bearer_token_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putOauthConfig">put_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig">put_service_account_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig">put_service_agent_id_token_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetApiKeyConfig">reset_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetBearerTokenConfig">reset_bearer_token_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetOauthConfig">reset_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetServiceAccountAuthConfig">reset_service_account_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetServiceAgentIdTokenAuthConfig">reset_service_agent_id_token_auth_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key_config` <a name="put_api_key_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putApiKeyConfig"></a>

```python
def put_api_key_config(
  api_key_secret_version: str,
  key_name: str,
  request_location: str
) -> None
```

###### `api_key_secret_version`<sup>Required</sup> <a name="api_key_secret_version" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putApiKeyConfig.parameter.apiKeySecretVersion"></a>

- *Type:* str

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#api_key_secret_version GoogleCesToolset#api_key_secret_version}

---

###### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putApiKeyConfig.parameter.keyName"></a>

- *Type:* str

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#key_name GoogleCesToolset#key_name}

---

###### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putApiKeyConfig.parameter.requestLocation"></a>

- *Type:* str

Key location in the request. Possible values: HEADER QUERY_STRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#request_location GoogleCesToolset#request_location}

---

##### `put_bearer_token_config` <a name="put_bearer_token_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putBearerTokenConfig"></a>

```python
def put_bearer_token_config(
  token: str = None
) -> None
```

###### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putBearerTokenConfig.parameter.token"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#token GoogleCesToolset#token}.

---

##### `put_oauth_config` <a name="put_oauth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putOauthConfig"></a>

```python
def put_oauth_config(
  client_id: str,
  client_secret_version: str,
  oauth_grant_type: str,
  token_endpoint: str,
  scopes: typing.List[str] = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.clientId"></a>

- *Type:* str

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#client_id GoogleCesToolset#client_id}

---

###### `client_secret_version`<sup>Required</sup> <a name="client_secret_version" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.clientSecretVersion"></a>

- *Type:* str

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#client_secret_version GoogleCesToolset#client_secret_version}

---

###### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.oauthGrantType"></a>

- *Type:* str

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#oauth_grant_type GoogleCesToolset#oauth_grant_type}

---

###### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.tokenEndpoint"></a>

- *Type:* str

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#token_endpoint GoogleCesToolset#token_endpoint}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.scopes"></a>

- *Type:* typing.List[str]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#scopes GoogleCesToolset#scopes}

---

##### `put_service_account_auth_config` <a name="put_service_account_auth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig"></a>

```python
def put_service_account_auth_config(
  service_account: str,
  scopes: typing.List[str] = None
) -> None
```

###### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.serviceAccount"></a>

- *Type:* str

The email address of the service account used for authenticatation.

CES
uses this service account to exchange an access token and the access token
is then sent in the 'Authorization' header of the request.

The service account must have the
'roles/iam.serviceAccountTokenCreator' role granted to the
CES service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#service_account GoogleCesToolset#service_account}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.scopes"></a>

- *Type:* typing.List[str]

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#scopes GoogleCesToolset#scopes}

---

##### `put_service_agent_id_token_auth_config` <a name="put_service_agent_id_token_auth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig"></a>

```python
def put_service_agent_id_token_auth_config() -> None
```

##### `reset_api_key_config` <a name="reset_api_key_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetApiKeyConfig"></a>

```python
def reset_api_key_config() -> None
```

##### `reset_bearer_token_config` <a name="reset_bearer_token_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetBearerTokenConfig"></a>

```python
def reset_bearer_token_config() -> None
```

##### `reset_oauth_config` <a name="reset_oauth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetOauthConfig"></a>

```python
def reset_oauth_config() -> None
```

##### `reset_service_account_auth_config` <a name="reset_service_account_auth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetServiceAccountAuthConfig"></a>

```python
def reset_service_account_auth_config() -> None
```

##### `reset_service_agent_id_token_auth_config` <a name="reset_service_agent_id_token_auth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetServiceAgentIdTokenAuthConfig"></a>

```python
def reset_service_agent_id_token_auth_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.bearerTokenConfig">bearer_token_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfig">service_account_auth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig">service_agent_id_token_auth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.apiKeyConfigInput">api_key_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.bearerTokenConfigInput">bearer_token_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.oauthConfigInput">oauth_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput">service_account_auth_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfigInput">service_agent_id_token_auth_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication">GoogleCesToolsetOpenApiToolsetApiAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_config`<sup>Required</sup> <a name="api_key_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.apiKeyConfig"></a>

```python
api_key_config: GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearer_token_config`<sup>Required</sup> <a name="bearer_token_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.bearerTokenConfig"></a>

```python
bearer_token_config: GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauth_config`<sup>Required</sup> <a name="oauth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.oauthConfig"></a>

```python
oauth_config: GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference</a>

---

##### `service_account_auth_config`<sup>Required</sup> <a name="service_account_auth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfig"></a>

```python
service_account_auth_config: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference</a>

---

##### `service_agent_id_token_auth_config`<sup>Required</sup> <a name="service_agent_id_token_auth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig"></a>

```python
service_agent_id_token_auth_config: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference</a>

---

##### `api_key_config_input`<sup>Optional</sup> <a name="api_key_config_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```python
api_key_config_input: GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a>

---

##### `bearer_token_config_input`<sup>Optional</sup> <a name="bearer_token_config_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```python
bearer_token_config_input: GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a>

---

##### `oauth_config_input`<sup>Optional</sup> <a name="oauth_config_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.oauthConfigInput"></a>

```python
oauth_config_input: GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a>

---

##### `service_account_auth_config_input`<sup>Optional</sup> <a name="service_account_auth_config_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput"></a>

```python
service_account_auth_config_input: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a>

---

##### `service_agent_id_token_auth_config_input`<sup>Optional</sup> <a name="service_agent_id_token_auth_config_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfigInput"></a>

```python
service_agent_id_token_auth_config_input: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolsetOpenApiToolsetApiAuthentication
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication">GoogleCesToolsetOpenApiToolsetApiAuthentication</a>

---


### GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a>

---


### GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---


### GoogleCesToolsetOpenApiToolsetOutputReference <a name="GoogleCesToolsetOpenApiToolsetOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putApiAuthentication">put_api_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putServiceDirectoryConfig">put_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putTlsConfig">put_tls_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetApiAuthentication">reset_api_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetIgnoreUnknownFields">reset_ignore_unknown_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetServiceDirectoryConfig">reset_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetTlsConfig">reset_tls_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_authentication` <a name="put_api_authentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putApiAuthentication"></a>

```python
def put_api_authentication(
  api_key_config: GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig = None,
  bearer_token_config: GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig = None,
  oauth_config: GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig = None,
  service_account_auth_config: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig = None,
  service_agent_id_token_auth_config: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig = None
) -> None
```

###### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putApiAuthentication.parameter.apiKeyConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#api_key_config GoogleCesToolset#api_key_config}

---

###### `bearer_token_config`<sup>Optional</sup> <a name="bearer_token_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putApiAuthentication.parameter.bearerTokenConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#bearer_token_config GoogleCesToolset#bearer_token_config}

---

###### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putApiAuthentication.parameter.oauthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#oauth_config GoogleCesToolset#oauth_config}

---

###### `service_account_auth_config`<sup>Optional</sup> <a name="service_account_auth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putApiAuthentication.parameter.serviceAccountAuthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#service_account_auth_config GoogleCesToolset#service_account_auth_config}

---

###### `service_agent_id_token_auth_config`<sup>Optional</sup> <a name="service_agent_id_token_auth_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putApiAuthentication.parameter.serviceAgentIdTokenAuthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

service_agent_id_token_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#service_agent_id_token_auth_config GoogleCesToolset#service_agent_id_token_auth_config}

---

##### `put_service_directory_config` <a name="put_service_directory_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putServiceDirectoryConfig"></a>

```python
def put_service_directory_config(
  service: str
) -> None
```

###### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putServiceDirectoryConfig.parameter.service"></a>

- *Type:* str

The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#service GoogleCesToolset#service}

---

##### `put_tls_config` <a name="put_tls_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putTlsConfig"></a>

```python
def put_tls_config(
  ca_certs: IResolvable | typing.List[GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts]
) -> None
```

###### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putTlsConfig.parameter.caCerts"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_toolset#ca_certs GoogleCesToolset#ca_certs}

---

##### `reset_api_authentication` <a name="reset_api_authentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetApiAuthentication"></a>

```python
def reset_api_authentication() -> None
```

##### `reset_ignore_unknown_fields` <a name="reset_ignore_unknown_fields" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetIgnoreUnknownFields"></a>

```python
def reset_ignore_unknown_fields() -> None
```

##### `reset_service_directory_config` <a name="reset_service_directory_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetServiceDirectoryConfig"></a>

```python
def reset_service_directory_config() -> None
```

##### `reset_tls_config` <a name="reset_tls_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetTlsConfig"></a>

```python
def reset_tls_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.apiAuthentication">api_authentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference">GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.apiAuthenticationInput">api_authentication_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication">GoogleCesToolsetOpenApiToolsetApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.ignoreUnknownFieldsInput">ignore_unknown_fields_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.openApiSchemaInput">open_api_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.serviceDirectoryConfigInput">service_directory_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.tlsConfigInput">tls_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig">GoogleCesToolsetOpenApiToolsetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.ignoreUnknownFields">ignore_unknown_fields</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.openApiSchema">open_api_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset">GoogleCesToolsetOpenApiToolset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_authentication`<sup>Required</sup> <a name="api_authentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.apiAuthentication"></a>

```python
api_authentication: GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference</a>

---

##### `service_directory_config`<sup>Required</sup> <a name="service_directory_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.serviceDirectoryConfig"></a>

```python
service_directory_config: GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference</a>

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.tlsConfig"></a>

```python
tls_config: GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference">GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `api_authentication_input`<sup>Optional</sup> <a name="api_authentication_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.apiAuthenticationInput"></a>

```python
api_authentication_input: GoogleCesToolsetOpenApiToolsetApiAuthentication
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication">GoogleCesToolsetOpenApiToolsetApiAuthentication</a>

---

##### `ignore_unknown_fields_input`<sup>Optional</sup> <a name="ignore_unknown_fields_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.ignoreUnknownFieldsInput"></a>

```python
ignore_unknown_fields_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `open_api_schema_input`<sup>Optional</sup> <a name="open_api_schema_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.openApiSchemaInput"></a>

```python
open_api_schema_input: str
```

- *Type:* str

---

##### `service_directory_config_input`<sup>Optional</sup> <a name="service_directory_config_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.serviceDirectoryConfigInput"></a>

```python
service_directory_config_input: GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig</a>

---

##### `tls_config_input`<sup>Optional</sup> <a name="tls_config_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.tlsConfigInput"></a>

```python
tls_config_input: GoogleCesToolsetOpenApiToolsetTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig">GoogleCesToolsetOpenApiToolsetTlsConfig</a>

---

##### `ignore_unknown_fields`<sup>Required</sup> <a name="ignore_unknown_fields" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.ignoreUnknownFields"></a>

```python
ignore_unknown_fields: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `open_api_schema`<sup>Required</sup> <a name="open_api_schema" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.openApiSchema"></a>

```python
open_api_schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolsetOpenApiToolset
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset">GoogleCesToolsetOpenApiToolset</a>

---


### GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference <a name="GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig</a>

---


### GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList <a name="GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>]

---


### GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference <a name="GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.certInput">cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.cert">cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert_input`<sup>Optional</sup> <a name="cert_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.certInput"></a>

```python
cert_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.cert"></a>

```python
cert: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>

---


### GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference <a name="GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.putCaCerts">put_ca_certs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ca_certs` <a name="put_ca_certs" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.putCaCerts"></a>

```python
def put_ca_certs(
  value: IResolvable | typing.List[GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.caCerts">ca_certs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList">GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.caCertsInput">ca_certs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig">GoogleCesToolsetOpenApiToolsetTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.caCerts"></a>

```python
ca_certs: GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList">GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList</a>

---

##### `ca_certs_input`<sup>Optional</sup> <a name="ca_certs_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.caCertsInput"></a>

```python
ca_certs_input: IResolvable | typing.List[GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesToolsetOpenApiToolsetTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig">GoogleCesToolsetOpenApiToolsetTlsConfig</a>

---


### GoogleCesToolsetTimeoutsOutputReference <a name="GoogleCesToolsetTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_toolset

googleCesToolset.GoogleCesToolsetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts">GoogleCesToolsetTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesToolsetTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts">GoogleCesToolsetTimeouts</a>

---



