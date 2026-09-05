# `googleIapAgentRegistryMcpServerIamBinding` Submodule <a name="`googleIapAgentRegistryMcpServerIamBinding` Submodule" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapAgentRegistryMcpServerIamBinding <a name="GoogleIapAgentRegistryMcpServerIamBinding" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding google_iap_agent_registry_mcp_server_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iap_agent_registry_mcp_server_iam_binding

googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mcp_server_id: str,
  members: typing.List[str],
  role: str,
  condition: GoogleIapAgentRegistryMcpServerIamBindingCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.mcpServerId">mcp_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#mcp_server_id GoogleIapAgentRegistryMcpServerIamBinding#mcp_server_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#members GoogleIapAgentRegistryMcpServerIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#role GoogleIapAgentRegistryMcpServerIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition">GoogleIapAgentRegistryMcpServerIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#id GoogleIapAgentRegistryMcpServerIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#location GoogleIapAgentRegistryMcpServerIamBinding#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#project GoogleIapAgentRegistryMcpServerIamBinding#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mcp_server_id`<sup>Required</sup> <a name="mcp_server_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.mcpServerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#mcp_server_id GoogleIapAgentRegistryMcpServerIamBinding#mcp_server_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#members GoogleIapAgentRegistryMcpServerIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#role GoogleIapAgentRegistryMcpServerIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition">GoogleIapAgentRegistryMcpServerIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#condition GoogleIapAgentRegistryMcpServerIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#id GoogleIapAgentRegistryMcpServerIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#location GoogleIapAgentRegistryMcpServerIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#project GoogleIapAgentRegistryMcpServerIamBinding#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#expression GoogleIapAgentRegistryMcpServerIamBinding#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#title GoogleIapAgentRegistryMcpServerIamBinding#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#description GoogleIapAgentRegistryMcpServerIamBinding#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleIapAgentRegistryMcpServerIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_iap_agent_registry_mcp_server_iam_binding

googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_iap_agent_registry_mcp_server_iam_binding

googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_iap_agent_registry_mcp_server_iam_binding

googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_iap_agent_registry_mcp_server_iam_binding

googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleIapAgentRegistryMcpServerIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleIapAgentRegistryMcpServerIamBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleIapAgentRegistryMcpServerIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIapAgentRegistryMcpServerIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference">GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition">GoogleIapAgentRegistryMcpServerIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.mcpServerIdInput">mcp_server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.mcpServerId">mcp_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.condition"></a>

```python
condition: GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference">GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.conditionInput"></a>

```python
condition_input: GoogleIapAgentRegistryMcpServerIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition">GoogleIapAgentRegistryMcpServerIamBindingCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mcp_server_id_input`<sup>Optional</sup> <a name="mcp_server_id_input" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.mcpServerIdInput"></a>

```python
mcp_server_id_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `mcp_server_id`<sup>Required</sup> <a name="mcp_server_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.mcpServerId"></a>

```python
mcp_server_id: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapAgentRegistryMcpServerIamBindingCondition <a name="GoogleIapAgentRegistryMcpServerIamBindingCondition" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iap_agent_registry_mcp_server_iam_binding

googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#expression GoogleIapAgentRegistryMcpServerIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#title GoogleIapAgentRegistryMcpServerIamBinding#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#description GoogleIapAgentRegistryMcpServerIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#expression GoogleIapAgentRegistryMcpServerIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#title GoogleIapAgentRegistryMcpServerIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#description GoogleIapAgentRegistryMcpServerIamBinding#description}.

---

### GoogleIapAgentRegistryMcpServerIamBindingConfig <a name="GoogleIapAgentRegistryMcpServerIamBindingConfig" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iap_agent_registry_mcp_server_iam_binding

googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mcp_server_id: str,
  members: typing.List[str],
  role: str,
  condition: GoogleIapAgentRegistryMcpServerIamBindingCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.mcpServerId">mcp_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#mcp_server_id GoogleIapAgentRegistryMcpServerIamBinding#mcp_server_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#members GoogleIapAgentRegistryMcpServerIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#role GoogleIapAgentRegistryMcpServerIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition">GoogleIapAgentRegistryMcpServerIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#id GoogleIapAgentRegistryMcpServerIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#location GoogleIapAgentRegistryMcpServerIamBinding#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#project GoogleIapAgentRegistryMcpServerIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mcp_server_id`<sup>Required</sup> <a name="mcp_server_id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.mcpServerId"></a>

```python
mcp_server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#mcp_server_id GoogleIapAgentRegistryMcpServerIamBinding#mcp_server_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#members GoogleIapAgentRegistryMcpServerIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#role GoogleIapAgentRegistryMcpServerIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.condition"></a>

```python
condition: GoogleIapAgentRegistryMcpServerIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition">GoogleIapAgentRegistryMcpServerIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#condition GoogleIapAgentRegistryMcpServerIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#id GoogleIapAgentRegistryMcpServerIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#location GoogleIapAgentRegistryMcpServerIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#project GoogleIapAgentRegistryMcpServerIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference <a name="GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_iap_agent_registry_mcp_server_iam_binding

googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition">GoogleIapAgentRegistryMcpServerIamBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIapAgentRegistryMcpServerIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition">GoogleIapAgentRegistryMcpServerIamBindingCondition</a>

---



