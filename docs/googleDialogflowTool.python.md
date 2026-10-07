# `googleDialogflowTool` Submodule <a name="`googleDialogflowTool` Submodule" id="@cdktn/provider-google-beta.googleDialogflowTool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowTool <a name="GoogleDialogflowTool" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool google_dialogflow_tool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowTool(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  tool_key: str,
  action_confirmation_requirement: typing.Mapping[str] = None,
  connector_spec: GoogleDialogflowToolConnectorSpec = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  function_spec: GoogleDialogflowToolFunctionSpec = None,
  id: str = None,
  open_api_spec: GoogleDialogflowToolOpenApiSpec = None,
  project: str = None,
  timeouts: GoogleDialogflowToolTimeouts = None,
  tool_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the tool. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.toolKey">tool_key</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.actionConfirmationRequirement">action_confirmation_requirement</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.connectorSpec">connector_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec">GoogleDialogflowToolConnectorSpec</a></code> | connector_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. Human readable description of the tool. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Optional. The human-readable name of the tool, unique within the project and location. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.functionSpec">function_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec">GoogleDialogflowToolFunctionSpec</a></code> | function_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#id GoogleDialogflowTool#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.openApiSpec">open_api_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec">GoogleDialogflowToolOpenApiSpec</a></code> | open_api_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#project GoogleDialogflowTool#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts">GoogleDialogflowToolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.toolId">tool_id</a></code> | <code>str</code> | Optional. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.location"></a>

- *Type:* str

The location of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#location GoogleDialogflowTool#location}

---

##### `tool_key`<sup>Required</sup> <a name="tool_key" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.toolKey"></a>

- *Type:* str

Required.

A human readable short name of the tool, which should be unique within the project. It should only contain letters, numbers, and underscores, and it will be used by LLM to identify the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#tool_key GoogleDialogflowTool#tool_key}

---

##### `action_confirmation_requirement`<sup>Optional</sup> <a name="action_confirmation_requirement" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.actionConfirmationRequirement"></a>

- *Type:* typing.Mapping[str]

Optional.

Confirmation requirement for the actions. Each key is an action name in the 'action_schemas'.
If an action's confirmation requirement is not specified (either the key is not present, or its value is 'CONFIRMATION_REQUIREMENT_UNSPECIFIED'), a default value will be populated depending on the action's method type: GET actions default to 'NOT_REQUIRED', and other actions default to 'REQUIRED'.
Valid values are 'REQUIRED' and 'NOT_REQUIRED'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#action_confirmation_requirement GoogleDialogflowTool#action_confirmation_requirement}

---

##### `connector_spec`<sup>Optional</sup> <a name="connector_spec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.connectorSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec">GoogleDialogflowToolConnectorSpec</a>

connector_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#connector_spec GoogleDialogflowTool#connector_spec}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#deletion_policy GoogleDialogflowTool#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.description"></a>

- *Type:* str

Optional. Human readable description of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#description GoogleDialogflowTool#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.displayName"></a>

- *Type:* str

Optional. The human-readable name of the tool, unique within the project and location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#display_name GoogleDialogflowTool#display_name}

---

##### `function_spec`<sup>Optional</sup> <a name="function_spec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.functionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec">GoogleDialogflowToolFunctionSpec</a>

function_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#function_spec GoogleDialogflowTool#function_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#id GoogleDialogflowTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `open_api_spec`<sup>Optional</sup> <a name="open_api_spec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.openApiSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec">GoogleDialogflowToolOpenApiSpec</a>

open_api_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#open_api_spec GoogleDialogflowTool#open_api_spec}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#project GoogleDialogflowTool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts">GoogleDialogflowToolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#timeouts GoogleDialogflowTool#timeouts}

---

##### `tool_id`<sup>Optional</sup> <a name="tool_id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.Initializer.parameter.toolId"></a>

- *Type:* str

Optional.

The ID to use for the tool, which will become the final component of the tool's resource name.
The tool ID must be compliant with the regression formula '[a-zA-Z][a-zA-Z0-9_-]*' with the characters length in range of [3,64].
If the field is not provided, an Id will be auto-generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#tool_id GoogleDialogflowTool#tool_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putConnectorSpec">put_connector_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putFunctionSpec">put_function_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putOpenApiSpec">put_open_api_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetActionConfirmationRequirement">reset_action_confirmation_requirement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetConnectorSpec">reset_connector_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetFunctionSpec">reset_function_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetOpenApiSpec">reset_open_api_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetToolId">reset_tool_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_connector_spec` <a name="put_connector_spec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putConnectorSpec"></a>

```python
def put_connector_spec(
  actions: IResolvable | typing.List[GoogleDialogflowToolConnectorSpecActions],
  name: str
) -> None
```

###### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putConnectorSpec.parameter.actions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions">GoogleDialogflowToolConnectorSpecActions</a>]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#actions GoogleDialogflowTool#actions}

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putConnectorSpec.parameter.name"></a>

- *Type:* str

The full resource name of the referenced Integration Connectors Connection. Format: 'projects/* /locations/* /connections/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#name GoogleDialogflowTool#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `put_function_spec` <a name="put_function_spec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putFunctionSpec"></a>

```python
def put_function_spec(
  input_schema: str = None,
  method_type: str = None,
  output_schema: str = None
) -> None
```

###### `input_schema`<sup>Optional</sup> <a name="input_schema" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putFunctionSpec.parameter.inputSchema"></a>

- *Type:* str

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the input of the function.
This input is a JSON object that contains the function's parameters as properties of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#input_schema GoogleDialogflowTool#input_schema}

---

###### `method_type`<sup>Optional</sup> <a name="method_type" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putFunctionSpec.parameter.methodType"></a>

- *Type:* str

Optional.

The method type of the function. If not specified, the default value is GET. Possible values: ["GET", "POST", "PUT", "DELETE", "PATCH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#method_type GoogleDialogflowTool#method_type}

---

###### `output_schema`<sup>Optional</sup> <a name="output_schema" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putFunctionSpec.parameter.outputSchema"></a>

- *Type:* str

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the output of the function.
This output is a JSON object that contains the function's parameters as properties of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#output_schema GoogleDialogflowTool#output_schema}

---

##### `put_open_api_spec` <a name="put_open_api_spec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putOpenApiSpec"></a>

```python
def put_open_api_spec(
  text_schema: str,
  authentication: GoogleDialogflowToolOpenApiSpecAuthentication = None,
  service_directory_config: GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig = None,
  tls_config: GoogleDialogflowToolOpenApiSpecTlsConfig = None
) -> None
```

###### `text_schema`<sup>Required</sup> <a name="text_schema" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putOpenApiSpec.parameter.textSchema"></a>

- *Type:* str

Required.

The OpenAPI schema specified as a text.
Note: Plays a role in linking the OpenAPI spec with the tool. The 'info.title' field in the OpenAPI schema must match the 'toolKey' of the tool, otherwise the API will overwrite 'info.title' with 'toolKey'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#text_schema GoogleDialogflowTool#text_schema}

---

###### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putOpenApiSpec.parameter.authentication"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication">GoogleDialogflowToolOpenApiSpecAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#authentication GoogleDialogflowTool#authentication}

---

###### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putOpenApiSpec.parameter.serviceDirectoryConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#service_directory_config GoogleDialogflowTool#service_directory_config}

---

###### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putOpenApiSpec.parameter.tlsConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig">GoogleDialogflowToolOpenApiSpecTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#tls_config GoogleDialogflowTool#tls_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#create GoogleDialogflowTool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#delete GoogleDialogflowTool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#update GoogleDialogflowTool#update}.

---

##### `reset_action_confirmation_requirement` <a name="reset_action_confirmation_requirement" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetActionConfirmationRequirement"></a>

```python
def reset_action_confirmation_requirement() -> None
```

##### `reset_connector_spec` <a name="reset_connector_spec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetConnectorSpec"></a>

```python
def reset_connector_spec() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_function_spec` <a name="reset_function_spec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetFunctionSpec"></a>

```python
def reset_function_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_open_api_spec` <a name="reset_open_api_spec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetOpenApiSpec"></a>

```python
def reset_open_api_spec() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tool_id` <a name="reset_tool_id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.resetToolId"></a>

```python
def reset_tool_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleDialogflowTool resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowTool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowTool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowTool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowTool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleDialogflowTool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDialogflowTool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDialogflowTool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowTool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.connectorSpec">connector_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference">GoogleDialogflowToolConnectorSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.functionSpec">function_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference">GoogleDialogflowToolFunctionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.openApiSpec">open_api_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference">GoogleDialogflowToolOpenApiSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.satisfiesPzi">satisfies_pzi</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.satisfiesPzs">satisfies_pzs</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference">GoogleDialogflowToolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.actionConfirmationRequirementInput">action_confirmation_requirement_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.connectorSpecInput">connector_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec">GoogleDialogflowToolConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.functionSpecInput">function_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec">GoogleDialogflowToolFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.openApiSpecInput">open_api_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec">GoogleDialogflowToolOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts">GoogleDialogflowToolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.toolIdInput">tool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.toolKeyInput">tool_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.actionConfirmationRequirement">action_confirmation_requirement</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.toolId">tool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.toolKey">tool_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connector_spec`<sup>Required</sup> <a name="connector_spec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.connectorSpec"></a>

```python
connector_spec: GoogleDialogflowToolConnectorSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference">GoogleDialogflowToolConnectorSpecOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `function_spec`<sup>Required</sup> <a name="function_spec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.functionSpec"></a>

```python
function_spec: GoogleDialogflowToolFunctionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference">GoogleDialogflowToolFunctionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `open_api_spec`<sup>Required</sup> <a name="open_api_spec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.openApiSpec"></a>

```python
open_api_spec: GoogleDialogflowToolOpenApiSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference">GoogleDialogflowToolOpenApiSpecOutputReference</a>

---

##### `satisfies_pzi`<sup>Required</sup> <a name="satisfies_pzi" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.satisfiesPzi"></a>

```python
satisfies_pzi: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `satisfies_pzs`<sup>Required</sup> <a name="satisfies_pzs" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.satisfiesPzs"></a>

```python
satisfies_pzs: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.timeouts"></a>

```python
timeouts: GoogleDialogflowToolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference">GoogleDialogflowToolTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `action_confirmation_requirement_input`<sup>Optional</sup> <a name="action_confirmation_requirement_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.actionConfirmationRequirementInput"></a>

```python
action_confirmation_requirement_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `connector_spec_input`<sup>Optional</sup> <a name="connector_spec_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.connectorSpecInput"></a>

```python
connector_spec_input: GoogleDialogflowToolConnectorSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec">GoogleDialogflowToolConnectorSpec</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `function_spec_input`<sup>Optional</sup> <a name="function_spec_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.functionSpecInput"></a>

```python
function_spec_input: GoogleDialogflowToolFunctionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec">GoogleDialogflowToolFunctionSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `open_api_spec_input`<sup>Optional</sup> <a name="open_api_spec_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.openApiSpecInput"></a>

```python
open_api_spec_input: GoogleDialogflowToolOpenApiSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec">GoogleDialogflowToolOpenApiSpec</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleDialogflowToolTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts">GoogleDialogflowToolTimeouts</a>

---

##### `tool_id_input`<sup>Optional</sup> <a name="tool_id_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.toolIdInput"></a>

```python
tool_id_input: str
```

- *Type:* str

---

##### `tool_key_input`<sup>Optional</sup> <a name="tool_key_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.toolKeyInput"></a>

```python
tool_key_input: str
```

- *Type:* str

---

##### `action_confirmation_requirement`<sup>Required</sup> <a name="action_confirmation_requirement" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.actionConfirmationRequirement"></a>

```python
action_confirmation_requirement: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `tool_id`<sup>Required</sup> <a name="tool_id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.toolId"></a>

```python
tool_id: str
```

- *Type:* str

---

##### `tool_key`<sup>Required</sup> <a name="tool_key" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.toolKey"></a>

```python
tool_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowTool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowToolConfig <a name="GoogleDialogflowToolConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  tool_key: str,
  action_confirmation_requirement: typing.Mapping[str] = None,
  connector_spec: GoogleDialogflowToolConnectorSpec = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  function_spec: GoogleDialogflowToolFunctionSpec = None,
  id: str = None,
  open_api_spec: GoogleDialogflowToolOpenApiSpec = None,
  project: str = None,
  timeouts: GoogleDialogflowToolTimeouts = None,
  tool_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.location">location</a></code> | <code>str</code> | The location of the tool. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.toolKey">tool_key</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.actionConfirmationRequirement">action_confirmation_requirement</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.connectorSpec">connector_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec">GoogleDialogflowToolConnectorSpec</a></code> | connector_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.description">description</a></code> | <code>str</code> | Optional. Human readable description of the tool. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.displayName">display_name</a></code> | <code>str</code> | Optional. The human-readable name of the tool, unique within the project and location. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.functionSpec">function_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec">GoogleDialogflowToolFunctionSpec</a></code> | function_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#id GoogleDialogflowTool#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.openApiSpec">open_api_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec">GoogleDialogflowToolOpenApiSpec</a></code> | open_api_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#project GoogleDialogflowTool#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts">GoogleDialogflowToolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.toolId">tool_id</a></code> | <code>str</code> | Optional. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#location GoogleDialogflowTool#location}

---

##### `tool_key`<sup>Required</sup> <a name="tool_key" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.toolKey"></a>

```python
tool_key: str
```

- *Type:* str

Required.

A human readable short name of the tool, which should be unique within the project. It should only contain letters, numbers, and underscores, and it will be used by LLM to identify the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#tool_key GoogleDialogflowTool#tool_key}

---

##### `action_confirmation_requirement`<sup>Optional</sup> <a name="action_confirmation_requirement" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.actionConfirmationRequirement"></a>

```python
action_confirmation_requirement: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

Confirmation requirement for the actions. Each key is an action name in the 'action_schemas'.
If an action's confirmation requirement is not specified (either the key is not present, or its value is 'CONFIRMATION_REQUIREMENT_UNSPECIFIED'), a default value will be populated depending on the action's method type: GET actions default to 'NOT_REQUIRED', and other actions default to 'REQUIRED'.
Valid values are 'REQUIRED' and 'NOT_REQUIRED'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#action_confirmation_requirement GoogleDialogflowTool#action_confirmation_requirement}

---

##### `connector_spec`<sup>Optional</sup> <a name="connector_spec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.connectorSpec"></a>

```python
connector_spec: GoogleDialogflowToolConnectorSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec">GoogleDialogflowToolConnectorSpec</a>

connector_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#connector_spec GoogleDialogflowTool#connector_spec}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#deletion_policy GoogleDialogflowTool#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. Human readable description of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#description GoogleDialogflowTool#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. The human-readable name of the tool, unique within the project and location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#display_name GoogleDialogflowTool#display_name}

---

##### `function_spec`<sup>Optional</sup> <a name="function_spec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.functionSpec"></a>

```python
function_spec: GoogleDialogflowToolFunctionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec">GoogleDialogflowToolFunctionSpec</a>

function_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#function_spec GoogleDialogflowTool#function_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#id GoogleDialogflowTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `open_api_spec`<sup>Optional</sup> <a name="open_api_spec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.openApiSpec"></a>

```python
open_api_spec: GoogleDialogflowToolOpenApiSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec">GoogleDialogflowToolOpenApiSpec</a>

open_api_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#open_api_spec GoogleDialogflowTool#open_api_spec}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#project GoogleDialogflowTool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.timeouts"></a>

```python
timeouts: GoogleDialogflowToolTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts">GoogleDialogflowToolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#timeouts GoogleDialogflowTool#timeouts}

---

##### `tool_id`<sup>Optional</sup> <a name="tool_id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConfig.property.toolId"></a>

```python
tool_id: str
```

- *Type:* str

Optional.

The ID to use for the tool, which will become the final component of the tool's resource name.
The tool ID must be compliant with the regression formula '[a-zA-Z][a-zA-Z0-9_-]*' with the characters length in range of [3,64].
If the field is not provided, an Id will be auto-generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#tool_id GoogleDialogflowTool#tool_id}

---

### GoogleDialogflowToolConnectorSpec <a name="GoogleDialogflowToolConnectorSpec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolConnectorSpec(
  actions: IResolvable | typing.List[GoogleDialogflowToolConnectorSpecActions],
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec.property.actions">actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions">GoogleDialogflowToolConnectorSpecActions</a>]</code> | actions block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec.property.name">name</a></code> | <code>str</code> | The full resource name of the referenced Integration Connectors Connection. Format: 'projects/* /locations/* /connections/*'. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec.property.actions"></a>

```python
actions: IResolvable | typing.List[GoogleDialogflowToolConnectorSpecActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions">GoogleDialogflowToolConnectorSpecActions</a>]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#actions GoogleDialogflowTool#actions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec.property.name"></a>

```python
name: str
```

- *Type:* str

The full resource name of the referenced Integration Connectors Connection. Format: 'projects/* /locations/* /connections/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#name GoogleDialogflowTool#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDialogflowToolConnectorSpecActions <a name="GoogleDialogflowToolConnectorSpecActions" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions(
  connection_action_id: str = None,
  entity_operation: GoogleDialogflowToolConnectorSpecActionsEntityOperation = None,
  input_fields: typing.List[str] = None,
  output_fields: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions.property.connectionActionId">connection_action_id</a></code> | <code>str</code> | ID of a Connection action for the tool to use. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions.property.entityOperation">entity_operation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation">GoogleDialogflowToolConnectorSpecActionsEntityOperation</a></code> | entity_operation block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions.property.inputFields">input_fields</a></code> | <code>typing.List[str]</code> | Entity fields to use as inputs for the operation. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions.property.outputFields">output_fields</a></code> | <code>typing.List[str]</code> | Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned. |

---

##### `connection_action_id`<sup>Optional</sup> <a name="connection_action_id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions.property.connectionActionId"></a>

```python
connection_action_id: str
```

- *Type:* str

ID of a Connection action for the tool to use.

This field is part of a required union field 'action_spec'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#connection_action_id GoogleDialogflowTool#connection_action_id}

---

##### `entity_operation`<sup>Optional</sup> <a name="entity_operation" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions.property.entityOperation"></a>

```python
entity_operation: GoogleDialogflowToolConnectorSpecActionsEntityOperation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation">GoogleDialogflowToolConnectorSpecActionsEntityOperation</a>

entity_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#entity_operation GoogleDialogflowTool#entity_operation}

---

##### `input_fields`<sup>Optional</sup> <a name="input_fields" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions.property.inputFields"></a>

```python
input_fields: typing.List[str]
```

- *Type:* typing.List[str]

Entity fields to use as inputs for the operation.

If no fields are specified, all fields of the Entity will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#input_fields GoogleDialogflowTool#input_fields}

---

##### `output_fields`<sup>Optional</sup> <a name="output_fields" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions.property.outputFields"></a>

```python
output_fields: typing.List[str]
```

- *Type:* typing.List[str]

Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#output_fields GoogleDialogflowTool#output_fields}

---

### GoogleDialogflowToolConnectorSpecActionsEntityOperation <a name="GoogleDialogflowToolConnectorSpecActionsEntityOperation" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation(
  entity_id: str,
  operation: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation.property.entityId">entity_id</a></code> | <code>str</code> | ID of the entity. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation.property.operation">operation</a></code> | <code>str</code> | The operation to perform on the entity. Possible values: ["LIST", "GET", "CREATE", "UPDATE", "DELETE"]. |

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

ID of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#entity_id GoogleDialogflowTool#entity_id}

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation.property.operation"></a>

```python
operation: str
```

- *Type:* str

The operation to perform on the entity. Possible values: ["LIST", "GET", "CREATE", "UPDATE", "DELETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#operation GoogleDialogflowTool#operation}

---

### GoogleDialogflowToolFunctionSpec <a name="GoogleDialogflowToolFunctionSpec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolFunctionSpec(
  input_schema: str = None,
  method_type: str = None,
  output_schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec.property.inputSchema">input_schema</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec.property.methodType">method_type</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec.property.outputSchema">output_schema</a></code> | <code>str</code> | Optional. |

---

##### `input_schema`<sup>Optional</sup> <a name="input_schema" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec.property.inputSchema"></a>

```python
input_schema: str
```

- *Type:* str

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the input of the function.
This input is a JSON object that contains the function's parameters as properties of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#input_schema GoogleDialogflowTool#input_schema}

---

##### `method_type`<sup>Optional</sup> <a name="method_type" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec.property.methodType"></a>

```python
method_type: str
```

- *Type:* str

Optional.

The method type of the function. If not specified, the default value is GET. Possible values: ["GET", "POST", "PUT", "DELETE", "PATCH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#method_type GoogleDialogflowTool#method_type}

---

##### `output_schema`<sup>Optional</sup> <a name="output_schema" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec.property.outputSchema"></a>

```python
output_schema: str
```

- *Type:* str

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the output of the function.
This output is a JSON object that contains the function's parameters as properties of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#output_schema GoogleDialogflowTool#output_schema}

---

### GoogleDialogflowToolOpenApiSpec <a name="GoogleDialogflowToolOpenApiSpec" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolOpenApiSpec(
  text_schema: str,
  authentication: GoogleDialogflowToolOpenApiSpecAuthentication = None,
  service_directory_config: GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig = None,
  tls_config: GoogleDialogflowToolOpenApiSpecTlsConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec.property.textSchema">text_schema</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication">GoogleDialogflowToolOpenApiSpecAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig">GoogleDialogflowToolOpenApiSpecTlsConfig</a></code> | tls_config block. |

---

##### `text_schema`<sup>Required</sup> <a name="text_schema" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec.property.textSchema"></a>

```python
text_schema: str
```

- *Type:* str

Required.

The OpenAPI schema specified as a text.
Note: Plays a role in linking the OpenAPI spec with the tool. The 'info.title' field in the OpenAPI schema must match the 'toolKey' of the tool, otherwise the API will overwrite 'info.title' with 'toolKey'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#text_schema GoogleDialogflowTool#text_schema}

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec.property.authentication"></a>

```python
authentication: GoogleDialogflowToolOpenApiSpecAuthentication
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication">GoogleDialogflowToolOpenApiSpecAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#authentication GoogleDialogflowTool#authentication}

---

##### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec.property.serviceDirectoryConfig"></a>

```python
service_directory_config: GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#service_directory_config GoogleDialogflowTool#service_directory_config}

---

##### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec.property.tlsConfig"></a>

```python
tls_config: GoogleDialogflowToolOpenApiSpecTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig">GoogleDialogflowToolOpenApiSpecTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#tls_config GoogleDialogflowTool#tls_config}

---

### GoogleDialogflowToolOpenApiSpecAuthentication <a name="GoogleDialogflowToolOpenApiSpecAuthentication" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication(
  api_key_config: GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig = None,
  bearer_token_config: GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig = None,
  oauth_config: GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig = None,
  service_agent_auth_config: GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication.property.bearerTokenConfig">bearer_token_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig">service_agent_auth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | service_agent_auth_config block. |

---

##### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication.property.apiKeyConfig"></a>

```python
api_key_config: GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#api_key_config GoogleDialogflowTool#api_key_config}

---

##### `bearer_token_config`<sup>Optional</sup> <a name="bearer_token_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication.property.bearerTokenConfig"></a>

```python
bearer_token_config: GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#bearer_token_config GoogleDialogflowTool#bearer_token_config}

---

##### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication.property.oauthConfig"></a>

```python
oauth_config: GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#oauth_config GoogleDialogflowTool#oauth_config}

---

##### `service_agent_auth_config`<sup>Optional</sup> <a name="service_agent_auth_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig"></a>

```python
service_agent_auth_config: GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

service_agent_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#service_agent_auth_config GoogleDialogflowTool#service_agent_auth_config}

---

### GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig <a name="GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig(
  key_name: str,
  request_location: str,
  api_key: str = None,
  secret_version_for_api_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName">key_name</a></code> | <code>str</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation">request_location</a></code> | <code>str</code> | Key location in the request. Possible values: ["HEADER", "QUERY_STRING"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey">api_key</a></code> | <code>str</code> | Optional. The API key. If the 'secretVersionForApiKey' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey">secret_version_for_api_key</a></code> | <code>str</code> | Optional. |

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#key_name GoogleDialogflowTool#key_name}

---

##### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation"></a>

```python
request_location: str
```

- *Type:* str

Key location in the request. Possible values: ["HEADER", "QUERY_STRING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#request_location GoogleDialogflowTool#request_location}

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

Optional. The API key. If the 'secretVersionForApiKey' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#api_key GoogleDialogflowTool#api_key}

---

##### `secret_version_for_api_key`<sup>Optional</sup> <a name="secret_version_for_api_key" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey"></a>

```python
secret_version_for_api_key: str
```

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the API key.
If this field is set, the 'apiKey' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#secret_version_for_api_key GoogleDialogflowTool#secret_version_for_api_key}

---

### GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig <a name="GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig(
  secret_version_for_token: str = None,
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken">secret_version_for_token</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>str</code> | Optional. The text token appended to the text 'Bearer' to the request Authorization header. |

---

##### `secret_version_for_token`<sup>Optional</sup> <a name="secret_version_for_token" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken"></a>

```python
secret_version_for_token: str
```

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the Bearer token.
If this field is set, the 'token' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#secret_version_for_token GoogleDialogflowTool#secret_version_for_token}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Optional. The text token appended to the text 'Bearer' to the request Authorization header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#token GoogleDialogflowTool#token}

---

### GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig <a name="GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig(
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
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientId">client_id</a></code> | <code>str</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType">oauth_grant_type</a></code> | <code>str</code> | OAuth grant types. Possible values: ["CLIENT_CREDENTIAL"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Optional. The OAuth scopes to grant. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret">secret_version_for_client_secret</a></code> | <code>str</code> | Optional. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#client_id GoogleDialogflowTool#client_id}

---

##### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType"></a>

```python
oauth_grant_type: str
```

- *Type:* str

OAuth grant types. Possible values: ["CLIENT_CREDENTIAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#oauth_grant_type GoogleDialogflowTool#oauth_grant_type}

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#token_endpoint GoogleDialogflowTool#token_endpoint}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#client_secret GoogleDialogflowTool#client_secret}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Optional. The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#scopes GoogleDialogflowTool#scopes}

---

##### `secret_version_for_client_secret`<sup>Optional</sup> <a name="secret_version_for_client_secret" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret"></a>

```python
secret_version_for_client_secret: str
```

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the client secret.
If this field is set, the 'clientSecret' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#secret_version_for_client_secret GoogleDialogflowTool#secret_version_for_client_secret}

---

### GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig <a name="GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig(
  service_agent_auth: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth">service_agent_auth</a></code> | <code>str</code> | Optional. |

---

##### `service_agent_auth`<sup>Optional</sup> <a name="service_agent_auth" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth"></a>

```python
service_agent_auth: str
```

- *Type:* str

Optional.

Indicate the auth token type generated from the Dialogflow service agent.
The generated token is sent in the Authorization header. Possible values: ["ID_TOKEN", "ACCESS_TOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#service_agent_auth GoogleDialogflowTool#service_agent_auth}

---

### GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig <a name="GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig(
  service: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig.property.service">service</a></code> | <code>str</code> | The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: 'projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>'. 'LocationID' of the service directory must be the same as the location of the tool. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig.property.service"></a>

```python
service: str
```

- *Type:* str

The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: 'projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>'. 'LocationID' of the service directory must be the same as the location of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#service GoogleDialogflowTool#service}

---

### GoogleDialogflowToolOpenApiSpecTlsConfig <a name="GoogleDialogflowToolOpenApiSpecTlsConfig" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig(
  ca_certs: IResolvable | typing.List[GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig.property.caCerts">ca_certs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts</a>]</code> | ca_certs block. |

---

##### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig.property.caCerts"></a>

```python
ca_certs: IResolvable | typing.List[GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts</a>]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#ca_certs GoogleDialogflowTool#ca_certs}

---

### GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts <a name="GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts(
  cert: str,
  display_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts.property.cert">cert</a></code> | <code>str</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts.property.displayName">display_name</a></code> | <code>str</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts.property.cert"></a>

```python
cert: str
```

- *Type:* str

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store.
If this is empty or unspecified, Dialogflow will use Google's default trust store to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt name".
A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#cert GoogleDialogflowTool#cert}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#display_name GoogleDialogflowTool#display_name}

---

### GoogleDialogflowToolTimeouts <a name="GoogleDialogflowToolTimeouts" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#create GoogleDialogflowTool#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#delete GoogleDialogflowTool#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#update GoogleDialogflowTool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#create GoogleDialogflowTool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#delete GoogleDialogflowTool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#update GoogleDialogflowTool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference <a name="GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityIdInput">entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operationInput">operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation">GoogleDialogflowToolConnectorSpecActionsEntityOperation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_id_input`<sup>Optional</sup> <a name="entity_id_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityIdInput"></a>

```python
entity_id_input: str
```

- *Type:* str

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operationInput"></a>

```python
operation_input: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowToolConnectorSpecActionsEntityOperation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation">GoogleDialogflowToolConnectorSpecActionsEntityOperation</a>

---


### GoogleDialogflowToolConnectorSpecActionsList <a name="GoogleDialogflowToolConnectorSpecActionsList" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowToolConnectorSpecActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions">GoogleDialogflowToolConnectorSpecActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDialogflowToolConnectorSpecActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions">GoogleDialogflowToolConnectorSpecActions</a>]

---


### GoogleDialogflowToolConnectorSpecActionsOutputReference <a name="GoogleDialogflowToolConnectorSpecActionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.putEntityOperation">put_entity_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.resetConnectionActionId">reset_connection_action_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.resetEntityOperation">reset_entity_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.resetInputFields">reset_input_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.resetOutputFields">reset_output_fields</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_entity_operation` <a name="put_entity_operation" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.putEntityOperation"></a>

```python
def put_entity_operation(
  entity_id: str,
  operation: str
) -> None
```

###### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.putEntityOperation.parameter.entityId"></a>

- *Type:* str

ID of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#entity_id GoogleDialogflowTool#entity_id}

---

###### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.putEntityOperation.parameter.operation"></a>

- *Type:* str

The operation to perform on the entity. Possible values: ["LIST", "GET", "CREATE", "UPDATE", "DELETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#operation GoogleDialogflowTool#operation}

---

##### `reset_connection_action_id` <a name="reset_connection_action_id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.resetConnectionActionId"></a>

```python
def reset_connection_action_id() -> None
```

##### `reset_entity_operation` <a name="reset_entity_operation" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.resetEntityOperation"></a>

```python
def reset_entity_operation() -> None
```

##### `reset_input_fields` <a name="reset_input_fields" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.resetInputFields"></a>

```python
def reset_input_fields() -> None
```

##### `reset_output_fields` <a name="reset_output_fields" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.resetOutputFields"></a>

```python
def reset_output_fields() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.entityOperation">entity_operation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference">GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.connectionActionIdInput">connection_action_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.entityOperationInput">entity_operation_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation">GoogleDialogflowToolConnectorSpecActionsEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.inputFieldsInput">input_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.outputFieldsInput">output_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.connectionActionId">connection_action_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.inputFields">input_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.outputFields">output_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions">GoogleDialogflowToolConnectorSpecActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_operation`<sup>Required</sup> <a name="entity_operation" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.entityOperation"></a>

```python
entity_operation: GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference">GoogleDialogflowToolConnectorSpecActionsEntityOperationOutputReference</a>

---

##### `connection_action_id_input`<sup>Optional</sup> <a name="connection_action_id_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.connectionActionIdInput"></a>

```python
connection_action_id_input: str
```

- *Type:* str

---

##### `entity_operation_input`<sup>Optional</sup> <a name="entity_operation_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.entityOperationInput"></a>

```python
entity_operation_input: GoogleDialogflowToolConnectorSpecActionsEntityOperation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsEntityOperation">GoogleDialogflowToolConnectorSpecActionsEntityOperation</a>

---

##### `input_fields_input`<sup>Optional</sup> <a name="input_fields_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.inputFieldsInput"></a>

```python
input_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `output_fields_input`<sup>Optional</sup> <a name="output_fields_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.outputFieldsInput"></a>

```python
output_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_action_id`<sup>Required</sup> <a name="connection_action_id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.connectionActionId"></a>

```python
connection_action_id: str
```

- *Type:* str

---

##### `input_fields`<sup>Required</sup> <a name="input_fields" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.inputFields"></a>

```python
input_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `output_fields`<sup>Required</sup> <a name="output_fields" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.outputFields"></a>

```python
output_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDialogflowToolConnectorSpecActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions">GoogleDialogflowToolConnectorSpecActions</a>

---


### GoogleDialogflowToolConnectorSpecOutputReference <a name="GoogleDialogflowToolConnectorSpecOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.putActions">put_actions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_actions` <a name="put_actions" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.putActions"></a>

```python
def put_actions(
  value: IResolvable | typing.List[GoogleDialogflowToolConnectorSpecActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.putActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions">GoogleDialogflowToolConnectorSpecActions</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList">GoogleDialogflowToolConnectorSpecActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.actionsInput">actions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions">GoogleDialogflowToolConnectorSpecActions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec">GoogleDialogflowToolConnectorSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.actions"></a>

```python
actions: GoogleDialogflowToolConnectorSpecActionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActionsList">GoogleDialogflowToolConnectorSpecActionsList</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.actionsInput"></a>

```python
actions_input: IResolvable | typing.List[GoogleDialogflowToolConnectorSpecActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecActions">GoogleDialogflowToolConnectorSpecActions</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowToolConnectorSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolConnectorSpec">GoogleDialogflowToolConnectorSpec</a>

---


### GoogleDialogflowToolFunctionSpecOutputReference <a name="GoogleDialogflowToolFunctionSpecOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.resetInputSchema">reset_input_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.resetMethodType">reset_method_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.resetOutputSchema">reset_output_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_input_schema` <a name="reset_input_schema" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.resetInputSchema"></a>

```python
def reset_input_schema() -> None
```

##### `reset_method_type` <a name="reset_method_type" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.resetMethodType"></a>

```python
def reset_method_type() -> None
```

##### `reset_output_schema` <a name="reset_output_schema" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.resetOutputSchema"></a>

```python
def reset_output_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.inputSchemaInput">input_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.methodTypeInput">method_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.outputSchemaInput">output_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.inputSchema">input_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.methodType">method_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.outputSchema">output_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec">GoogleDialogflowToolFunctionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_schema_input`<sup>Optional</sup> <a name="input_schema_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.inputSchemaInput"></a>

```python
input_schema_input: str
```

- *Type:* str

---

##### `method_type_input`<sup>Optional</sup> <a name="method_type_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.methodTypeInput"></a>

```python
method_type_input: str
```

- *Type:* str

---

##### `output_schema_input`<sup>Optional</sup> <a name="output_schema_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.outputSchemaInput"></a>

```python
output_schema_input: str
```

- *Type:* str

---

##### `input_schema`<sup>Required</sup> <a name="input_schema" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.inputSchema"></a>

```python
input_schema: str
```

- *Type:* str

---

##### `method_type`<sup>Required</sup> <a name="method_type" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.methodType"></a>

```python
method_type: str
```

- *Type:* str

---

##### `output_schema`<sup>Required</sup> <a name="output_schema" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.outputSchema"></a>

```python
output_schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowToolFunctionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolFunctionSpec">GoogleDialogflowToolFunctionSpec</a>

---


### GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference <a name="GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey">reset_secret_version_for_api_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_secret_version_for_api_key` <a name="reset_secret_version_for_api_key" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey"></a>

```python
def reset_secret_version_for_api_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">request_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput">secret_version_for_api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation">request_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey">secret_version_for_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `request_location_input`<sup>Optional</sup> <a name="request_location_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```python
request_location_input: str
```

- *Type:* str

---

##### `secret_version_for_api_key_input`<sup>Optional</sup> <a name="secret_version_for_api_key_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput"></a>

```python
secret_version_for_api_key_input: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```python
request_location: str
```

- *Type:* str

---

##### `secret_version_for_api_key`<sup>Required</sup> <a name="secret_version_for_api_key" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey"></a>

```python
secret_version_for_api_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

---


### GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference <a name="GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken">reset_secret_version_for_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken">reset_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secret_version_for_token` <a name="reset_secret_version_for_token" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken"></a>

```python
def reset_secret_version_for_token() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```python
def reset_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput">secret_version_for_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken">secret_version_for_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_version_for_token_input`<sup>Optional</sup> <a name="secret_version_for_token_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput"></a>

```python
secret_version_for_token_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `secret_version_for_token`<sup>Required</sup> <a name="secret_version_for_token" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken"></a>

```python
secret_version_for_token: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---


### GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference <a name="GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret">reset_secret_version_for_client_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```

##### `reset_secret_version_for_client_secret` <a name="reset_secret_version_for_client_secret" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret"></a>

```python
def reset_secret_version_for_client_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauth_grant_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput">secret_version_for_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauth_grant_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret">secret_version_for_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `oauth_grant_type_input`<sup>Optional</sup> <a name="oauth_grant_type_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```python
oauth_grant_type_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_version_for_client_secret_input`<sup>Optional</sup> <a name="secret_version_for_client_secret_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput"></a>

```python
secret_version_for_client_secret_input: str
```

- *Type:* str

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```python
oauth_grant_type: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_version_for_client_secret`<sup>Required</sup> <a name="secret_version_for_client_secret" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret"></a>

```python
secret_version_for_client_secret: str
```

- *Type:* str

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

---


### GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference <a name="GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig">put_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig">put_bearer_token_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig">put_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig">put_service_agent_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig">reset_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig">reset_bearer_token_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig">reset_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig">reset_service_agent_auth_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key_config` <a name="put_api_key_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig"></a>

```python
def put_api_key_config(
  key_name: str,
  request_location: str,
  api_key: str = None,
  secret_version_for_api_key: str = None
) -> None
```

###### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.keyName"></a>

- *Type:* str

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#key_name GoogleDialogflowTool#key_name}

---

###### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.requestLocation"></a>

- *Type:* str

Key location in the request. Possible values: ["HEADER", "QUERY_STRING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#request_location GoogleDialogflowTool#request_location}

---

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.apiKey"></a>

- *Type:* str

Optional. The API key. If the 'secretVersionForApiKey' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#api_key GoogleDialogflowTool#api_key}

---

###### `secret_version_for_api_key`<sup>Optional</sup> <a name="secret_version_for_api_key" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.secretVersionForApiKey"></a>

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the API key.
If this field is set, the 'apiKey' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#secret_version_for_api_key GoogleDialogflowTool#secret_version_for_api_key}

---

##### `put_bearer_token_config` <a name="put_bearer_token_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig"></a>

```python
def put_bearer_token_config(
  secret_version_for_token: str = None,
  token: str = None
) -> None
```

###### `secret_version_for_token`<sup>Optional</sup> <a name="secret_version_for_token" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig.parameter.secretVersionForToken"></a>

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the Bearer token.
If this field is set, the 'token' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#secret_version_for_token GoogleDialogflowTool#secret_version_for_token}

---

###### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig.parameter.token"></a>

- *Type:* str

Optional. The text token appended to the text 'Bearer' to the request Authorization header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#token GoogleDialogflowTool#token}

---

##### `put_oauth_config` <a name="put_oauth_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig"></a>

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

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.clientId"></a>

- *Type:* str

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#client_id GoogleDialogflowTool#client_id}

---

###### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.oauthGrantType"></a>

- *Type:* str

OAuth grant types. Possible values: ["CLIENT_CREDENTIAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#oauth_grant_type GoogleDialogflowTool#oauth_grant_type}

---

###### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.tokenEndpoint"></a>

- *Type:* str

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#token_endpoint GoogleDialogflowTool#token_endpoint}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.clientSecret"></a>

- *Type:* str

Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#client_secret GoogleDialogflowTool#client_secret}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.scopes"></a>

- *Type:* typing.List[str]

Optional. The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#scopes GoogleDialogflowTool#scopes}

---

###### `secret_version_for_client_secret`<sup>Optional</sup> <a name="secret_version_for_client_secret" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.secretVersionForClientSecret"></a>

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the client secret.
If this field is set, the 'clientSecret' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#secret_version_for_client_secret GoogleDialogflowTool#secret_version_for_client_secret}

---

##### `put_service_agent_auth_config` <a name="put_service_agent_auth_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig"></a>

```python
def put_service_agent_auth_config(
  service_agent_auth: str = None
) -> None
```

###### `service_agent_auth`<sup>Optional</sup> <a name="service_agent_auth" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig.parameter.serviceAgentAuth"></a>

- *Type:* str

Optional.

Indicate the auth token type generated from the Dialogflow service agent.
The generated token is sent in the Authorization header. Possible values: ["ID_TOKEN", "ACCESS_TOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#service_agent_auth GoogleDialogflowTool#service_agent_auth}

---

##### `reset_api_key_config` <a name="reset_api_key_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig"></a>

```python
def reset_api_key_config() -> None
```

##### `reset_bearer_token_config` <a name="reset_bearer_token_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig"></a>

```python
def reset_bearer_token_config() -> None
```

##### `reset_oauth_config` <a name="reset_oauth_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig"></a>

```python
def reset_oauth_config() -> None
```

##### `reset_service_agent_auth_config` <a name="reset_service_agent_auth_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig"></a>

```python
def reset_service_agent_auth_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig">bearer_token_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference">GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig">service_agent_auth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput">api_key_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput">bearer_token_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput">oauth_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput">service_agent_auth_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication">GoogleDialogflowToolOpenApiSpecAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_config`<sup>Required</sup> <a name="api_key_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig"></a>

```python
api_key_config: GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearer_token_config`<sup>Required</sup> <a name="bearer_token_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig"></a>

```python
bearer_token_config: GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauth_config`<sup>Required</sup> <a name="oauth_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig"></a>

```python
oauth_config: GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference">GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference</a>

---

##### `service_agent_auth_config`<sup>Required</sup> <a name="service_agent_auth_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig"></a>

```python
service_agent_auth_config: GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a>

---

##### `api_key_config_input`<sup>Optional</sup> <a name="api_key_config_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```python
api_key_config_input: GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `bearer_token_config_input`<sup>Optional</sup> <a name="bearer_token_config_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```python
bearer_token_config_input: GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `oauth_config_input`<sup>Optional</sup> <a name="oauth_config_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput"></a>

```python
oauth_config_input: GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `service_agent_auth_config_input`<sup>Optional</sup> <a name="service_agent_auth_config_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput"></a>

```python
service_agent_auth_config_input: GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowToolOpenApiSpecAuthentication
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication">GoogleDialogflowToolOpenApiSpecAuthentication</a>

---


### GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference <a name="GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth">reset_service_agent_auth</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_agent_auth` <a name="reset_service_agent_auth" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth"></a>

```python
def reset_service_agent_auth() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput">service_agent_auth_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth">service_agent_auth</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_agent_auth_input`<sup>Optional</sup> <a name="service_agent_auth_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput"></a>

```python
service_agent_auth_input: str
```

- *Type:* str

---

##### `service_agent_auth`<sup>Required</sup> <a name="service_agent_auth" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth"></a>

```python
service_agent_auth: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---


### GoogleDialogflowToolOpenApiSpecOutputReference <a name="GoogleDialogflowToolOpenApiSpecOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.putAuthentication">put_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.putServiceDirectoryConfig">put_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.putTlsConfig">put_tls_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.resetAuthentication">reset_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.resetServiceDirectoryConfig">reset_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.resetTlsConfig">reset_tls_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authentication` <a name="put_authentication" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.putAuthentication"></a>

```python
def put_authentication(
  api_key_config: GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig = None,
  bearer_token_config: GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig = None,
  oauth_config: GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig = None,
  service_agent_auth_config: GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig = None
) -> None
```

###### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.putAuthentication.parameter.apiKeyConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#api_key_config GoogleDialogflowTool#api_key_config}

---

###### `bearer_token_config`<sup>Optional</sup> <a name="bearer_token_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.putAuthentication.parameter.bearerTokenConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#bearer_token_config GoogleDialogflowTool#bearer_token_config}

---

###### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.putAuthentication.parameter.oauthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#oauth_config GoogleDialogflowTool#oauth_config}

---

###### `service_agent_auth_config`<sup>Optional</sup> <a name="service_agent_auth_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.putAuthentication.parameter.serviceAgentAuthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

service_agent_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#service_agent_auth_config GoogleDialogflowTool#service_agent_auth_config}

---

##### `put_service_directory_config` <a name="put_service_directory_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.putServiceDirectoryConfig"></a>

```python
def put_service_directory_config(
  service: str
) -> None
```

###### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.putServiceDirectoryConfig.parameter.service"></a>

- *Type:* str

The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: 'projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>'. 'LocationID' of the service directory must be the same as the location of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#service GoogleDialogflowTool#service}

---

##### `put_tls_config` <a name="put_tls_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.putTlsConfig"></a>

```python
def put_tls_config(
  ca_certs: IResolvable | typing.List[GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts]
) -> None
```

###### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.putTlsConfig.parameter.caCerts"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts</a>]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_dialogflow_tool#ca_certs GoogleDialogflowTool#ca_certs}

---

##### `reset_authentication` <a name="reset_authentication" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.resetAuthentication"></a>

```python
def reset_authentication() -> None
```

##### `reset_service_directory_config` <a name="reset_service_directory_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.resetServiceDirectoryConfig"></a>

```python
def reset_service_directory_config() -> None
```

##### `reset_tls_config` <a name="reset_tls_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.resetTlsConfig"></a>

```python
def reset_tls_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference">GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference">GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference">GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.authenticationInput">authentication_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication">GoogleDialogflowToolOpenApiSpecAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput">service_directory_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.textSchemaInput">text_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.tlsConfigInput">tls_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig">GoogleDialogflowToolOpenApiSpecTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.textSchema">text_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec">GoogleDialogflowToolOpenApiSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.authentication"></a>

```python
authentication: GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference">GoogleDialogflowToolOpenApiSpecAuthenticationOutputReference</a>

---

##### `service_directory_config`<sup>Required</sup> <a name="service_directory_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfig"></a>

```python
service_directory_config: GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference">GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference</a>

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.tlsConfig"></a>

```python
tls_config: GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference">GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference</a>

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.authenticationInput"></a>

```python
authentication_input: GoogleDialogflowToolOpenApiSpecAuthentication
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecAuthentication">GoogleDialogflowToolOpenApiSpecAuthentication</a>

---

##### `service_directory_config_input`<sup>Optional</sup> <a name="service_directory_config_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput"></a>

```python
service_directory_config_input: GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `text_schema_input`<sup>Optional</sup> <a name="text_schema_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.textSchemaInput"></a>

```python
text_schema_input: str
```

- *Type:* str

---

##### `tls_config_input`<sup>Optional</sup> <a name="tls_config_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.tlsConfigInput"></a>

```python
tls_config_input: GoogleDialogflowToolOpenApiSpecTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig">GoogleDialogflowToolOpenApiSpecTlsConfig</a>

---

##### `text_schema`<sup>Required</sup> <a name="text_schema" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.textSchema"></a>

```python
text_schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowToolOpenApiSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpec">GoogleDialogflowToolOpenApiSpec</a>

---


### GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference <a name="GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowToolOpenApiSpecServiceDirectoryConfig</a>

---


### GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList <a name="GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts</a>]

---


### GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference <a name="GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput">cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert">cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert_input`<sup>Optional</sup> <a name="cert_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput"></a>

```python
cert_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert"></a>

```python
cert: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts</a>

---


### GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference <a name="GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.putCaCerts">put_ca_certs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ca_certs` <a name="put_ca_certs" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.putCaCerts"></a>

```python
def put_ca_certs(
  value: IResolvable | typing.List[GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCerts">ca_certs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList">GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput">ca_certs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig">GoogleDialogflowToolOpenApiSpecTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCerts"></a>

```python
ca_certs: GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList">GoogleDialogflowToolOpenApiSpecTlsConfigCaCertsList</a>

---

##### `ca_certs_input`<sup>Optional</sup> <a name="ca_certs_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput"></a>

```python
ca_certs_input: IResolvable | typing.List[GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowToolOpenApiSpecTlsConfigCaCerts</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowToolOpenApiSpecTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolOpenApiSpecTlsConfig">GoogleDialogflowToolOpenApiSpecTlsConfig</a>

---


### GoogleDialogflowToolTimeoutsOutputReference <a name="GoogleDialogflowToolTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_tool

googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts">GoogleDialogflowToolTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDialogflowToolTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowTool.GoogleDialogflowToolTimeouts">GoogleDialogflowToolTimeouts</a>

---



