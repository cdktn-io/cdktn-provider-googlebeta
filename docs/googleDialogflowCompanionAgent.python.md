# `googleDialogflowCompanionAgent` Submodule <a name="`googleDialogflowCompanionAgent` Submodule" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCompanionAgent <a name="GoogleDialogflowCompanionAgent" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent google_dialogflow_companion_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  companion_agent_id: str,
  location: str,
  ces_tool_specs: IResolvable | typing.List[GoogleDialogflowCompanionAgentCesToolSpecs] = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  skill_configs: IResolvable | typing.List[GoogleDialogflowCompanionAgentSkillConfigs] = None,
  timeouts: GoogleDialogflowCompanionAgentTimeouts = None,
  toolset_tools: IResolvable | typing.List[GoogleDialogflowCompanionAgentToolsetTools] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.companionAgentId">companion_agent_id</a></code> | <code>str</code> | The ID to use for the companion agent, which will become the final component of the companion agent's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the companion agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.cesToolSpecs">ces_tool_specs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>]</code> | ces_tool_specs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.description">description</a></code> | <code>str</code> | Description for the companion agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name for the companion agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#id GoogleDialogflowCompanionAgent#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#project GoogleDialogflowCompanionAgent#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.skillConfigs">skill_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>]</code> | skill_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.toolsetTools">toolset_tools</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>]</code> | toolset_tools block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `companion_agent_id`<sup>Required</sup> <a name="companion_agent_id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.companionAgentId"></a>

- *Type:* str

The ID to use for the companion agent, which will become the final component of the companion agent's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#companion_agent_id GoogleDialogflowCompanionAgent#companion_agent_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.location"></a>

- *Type:* str

The location of the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#location GoogleDialogflowCompanionAgent#location}

---

##### `ces_tool_specs`<sup>Optional</sup> <a name="ces_tool_specs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.cesToolSpecs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>]

ces_tool_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#ces_tool_specs GoogleDialogflowCompanionAgent#ces_tool_specs}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#deletion_policy GoogleDialogflowCompanionAgent#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.description"></a>

- *Type:* str

Description for the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#description GoogleDialogflowCompanionAgent#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.displayName"></a>

- *Type:* str

Display name for the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#display_name GoogleDialogflowCompanionAgent#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#id GoogleDialogflowCompanionAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#project GoogleDialogflowCompanionAgent#project}.

---

##### `skill_configs`<sup>Optional</sup> <a name="skill_configs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.skillConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>]

skill_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#skill_configs GoogleDialogflowCompanionAgent#skill_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#timeouts GoogleDialogflowCompanionAgent#timeouts}

---

##### `toolset_tools`<sup>Optional</sup> <a name="toolset_tools" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.toolsetTools"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>]

toolset_tools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#toolset_tools GoogleDialogflowCompanionAgent#toolset_tools}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putCesToolSpecs">put_ces_tool_specs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putSkillConfigs">put_skill_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putToolsetTools">put_toolset_tools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetCesToolSpecs">reset_ces_tool_specs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetSkillConfigs">reset_skill_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetToolsetTools">reset_toolset_tools</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ces_tool_specs` <a name="put_ces_tool_specs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putCesToolSpecs"></a>

```python
def put_ces_tool_specs(
  value: IResolvable | typing.List[GoogleDialogflowCompanionAgentCesToolSpecs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putCesToolSpecs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>]

---

##### `put_skill_configs` <a name="put_skill_configs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putSkillConfigs"></a>

```python
def put_skill_configs(
  value: IResolvable | typing.List[GoogleDialogflowCompanionAgentSkillConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putSkillConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#create GoogleDialogflowCompanionAgent#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#delete GoogleDialogflowCompanionAgent#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#update GoogleDialogflowCompanionAgent#update}.

---

##### `put_toolset_tools` <a name="put_toolset_tools" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putToolsetTools"></a>

```python
def put_toolset_tools(
  value: IResolvable | typing.List[GoogleDialogflowCompanionAgentToolsetTools]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putToolsetTools.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>]

---

##### `reset_ces_tool_specs` <a name="reset_ces_tool_specs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetCesToolSpecs"></a>

```python
def reset_ces_tool_specs() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_skill_configs` <a name="reset_skill_configs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetSkillConfigs"></a>

```python
def reset_skill_configs() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_toolset_tools` <a name="reset_toolset_tools" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetToolsetTools"></a>

```python
def reset_toolset_tools() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleDialogflowCompanionAgent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleDialogflowCompanionAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDialogflowCompanionAgent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDialogflowCompanionAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCompanionAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cesToolSpecs">ces_tool_specs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList">GoogleDialogflowCompanionAgentCesToolSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.skillConfigs">skill_configs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList">GoogleDialogflowCompanionAgentSkillConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference">GoogleDialogflowCompanionAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.toolsetTools">toolset_tools</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList">GoogleDialogflowCompanionAgentToolsetToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cesToolSpecsInput">ces_tool_specs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.companionAgentIdInput">companion_agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.skillConfigsInput">skill_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.toolsetToolsInput">toolset_tools_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.companionAgentId">companion_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ces_tool_specs`<sup>Required</sup> <a name="ces_tool_specs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cesToolSpecs"></a>

```python
ces_tool_specs: GoogleDialogflowCompanionAgentCesToolSpecsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList">GoogleDialogflowCompanionAgentCesToolSpecsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `skill_configs`<sup>Required</sup> <a name="skill_configs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.skillConfigs"></a>

```python
skill_configs: GoogleDialogflowCompanionAgentSkillConfigsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList">GoogleDialogflowCompanionAgentSkillConfigsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.timeouts"></a>

```python
timeouts: GoogleDialogflowCompanionAgentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference">GoogleDialogflowCompanionAgentTimeoutsOutputReference</a>

---

##### `toolset_tools`<sup>Required</sup> <a name="toolset_tools" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.toolsetTools"></a>

```python
toolset_tools: GoogleDialogflowCompanionAgentToolsetToolsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList">GoogleDialogflowCompanionAgentToolsetToolsList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `ces_tool_specs_input`<sup>Optional</sup> <a name="ces_tool_specs_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cesToolSpecsInput"></a>

```python
ces_tool_specs_input: IResolvable | typing.List[GoogleDialogflowCompanionAgentCesToolSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>]

---

##### `companion_agent_id_input`<sup>Optional</sup> <a name="companion_agent_id_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.companionAgentIdInput"></a>

```python
companion_agent_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `skill_configs_input`<sup>Optional</sup> <a name="skill_configs_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.skillConfigsInput"></a>

```python
skill_configs_input: IResolvable | typing.List[GoogleDialogflowCompanionAgentSkillConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleDialogflowCompanionAgentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a>

---

##### `toolset_tools_input`<sup>Optional</sup> <a name="toolset_tools_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.toolsetToolsInput"></a>

```python
toolset_tools_input: IResolvable | typing.List[GoogleDialogflowCompanionAgentToolsetTools]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>]

---

##### `companion_agent_id`<sup>Required</sup> <a name="companion_agent_id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.companionAgentId"></a>

```python
companion_agent_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCompanionAgentCesToolSpecs <a name="GoogleDialogflowCompanionAgentCesToolSpecs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs(
  ces_tool: str = None,
  confirmation_requirement: str = None,
  parameter_overrides: IResolvable | typing.List[GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides] = None,
  proactive_enabled: bool | IResolvable = None,
  reactive_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.cesTool">ces_tool</a></code> | <code>str</code> | The resource name of the CES tool. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.confirmationRequirement">confirmation_requirement</a></code> | <code>str</code> | Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.parameterOverrides">parameter_overrides</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>]</code> | parameter_overrides block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.proactiveEnabled">proactive_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the tool is enabled in proactive mode. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.reactiveEnabled">reactive_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the tool is enabled in reactive mode. |

---

##### `ces_tool`<sup>Optional</sup> <a name="ces_tool" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.cesTool"></a>

```python
ces_tool: str
```

- *Type:* str

The resource name of the CES tool. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#ces_tool GoogleDialogflowCompanionAgent#ces_tool}

---

##### `confirmation_requirement`<sup>Optional</sup> <a name="confirmation_requirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.confirmationRequirement"></a>

```python
confirmation_requirement: str
```

- *Type:* str

Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#confirmation_requirement GoogleDialogflowCompanionAgent#confirmation_requirement}

---

##### `parameter_overrides`<sup>Optional</sup> <a name="parameter_overrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.parameterOverrides"></a>

```python
parameter_overrides: IResolvable | typing.List[GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>]

parameter_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#parameter_overrides GoogleDialogflowCompanionAgent#parameter_overrides}

---

##### `proactive_enabled`<sup>Optional</sup> <a name="proactive_enabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.proactiveEnabled"></a>

```python
proactive_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the tool is enabled in proactive mode.

All tools are enabled in proactive mode by default. To disable a tool in proactive mode, set this field to 'false'.
NOTE: At least one of 'proactive_enabled' or 'reactive_enabled' should be 'true' else the tool will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#proactive_enabled GoogleDialogflowCompanionAgent#proactive_enabled}

---

##### `reactive_enabled`<sup>Optional</sup> <a name="reactive_enabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.reactiveEnabled"></a>

```python
reactive_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the tool is enabled in reactive mode.

All tools are disabled in reactive mode by default. To enable a tool in reactive mode, set this field to 'true'.
NOTE: At least one of 'reactive_enabled' or 'proactive_enabled' should be 'true' else the tool will be ignored. CompanionAgent config will throw an error if any unsupported tool is enabled in reactive mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#reactive_enabled GoogleDialogflowCompanionAgent#reactive_enabled}

---

### GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides <a name="GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides(
  context_reference_key: str,
  parameter_name: str,
  field_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.contextReferenceKey">context_reference_key</a></code> | <code>str</code> | The key of the context reference in ingested context references. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.parameterName">parameter_name</a></code> | <code>str</code> | The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.fieldPath">field_path</a></code> | <code>str</code> | The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it). |

---

##### `context_reference_key`<sup>Required</sup> <a name="context_reference_key" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.contextReferenceKey"></a>

```python
context_reference_key: str
```

- *Type:* str

The key of the context reference in ingested context references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#context_reference_key GoogleDialogflowCompanionAgent#context_reference_key}

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#parameter_name GoogleDialogflowCompanionAgent#parameter_name}

---

##### `field_path`<sup>Optional</sup> <a name="field_path" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#field_path GoogleDialogflowCompanionAgent#field_path}

---

### GoogleDialogflowCompanionAgentConfig <a name="GoogleDialogflowCompanionAgentConfig" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  companion_agent_id: str,
  location: str,
  ces_tool_specs: IResolvable | typing.List[GoogleDialogflowCompanionAgentCesToolSpecs] = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  skill_configs: IResolvable | typing.List[GoogleDialogflowCompanionAgentSkillConfigs] = None,
  timeouts: GoogleDialogflowCompanionAgentTimeouts = None,
  toolset_tools: IResolvable | typing.List[GoogleDialogflowCompanionAgentToolsetTools] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.companionAgentId">companion_agent_id</a></code> | <code>str</code> | The ID to use for the companion agent, which will become the final component of the companion agent's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.location">location</a></code> | <code>str</code> | The location of the companion agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.cesToolSpecs">ces_tool_specs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>]</code> | ces_tool_specs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.description">description</a></code> | <code>str</code> | Description for the companion agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name for the companion agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#id GoogleDialogflowCompanionAgent#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#project GoogleDialogflowCompanionAgent#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.skillConfigs">skill_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>]</code> | skill_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.toolsetTools">toolset_tools</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>]</code> | toolset_tools block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `companion_agent_id`<sup>Required</sup> <a name="companion_agent_id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.companionAgentId"></a>

```python
companion_agent_id: str
```

- *Type:* str

The ID to use for the companion agent, which will become the final component of the companion agent's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#companion_agent_id GoogleDialogflowCompanionAgent#companion_agent_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#location GoogleDialogflowCompanionAgent#location}

---

##### `ces_tool_specs`<sup>Optional</sup> <a name="ces_tool_specs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.cesToolSpecs"></a>

```python
ces_tool_specs: IResolvable | typing.List[GoogleDialogflowCompanionAgentCesToolSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>]

ces_tool_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#ces_tool_specs GoogleDialogflowCompanionAgent#ces_tool_specs}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#deletion_policy GoogleDialogflowCompanionAgent#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description for the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#description GoogleDialogflowCompanionAgent#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name for the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#display_name GoogleDialogflowCompanionAgent#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#id GoogleDialogflowCompanionAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#project GoogleDialogflowCompanionAgent#project}.

---

##### `skill_configs`<sup>Optional</sup> <a name="skill_configs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.skillConfigs"></a>

```python
skill_configs: IResolvable | typing.List[GoogleDialogflowCompanionAgentSkillConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>]

skill_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#skill_configs GoogleDialogflowCompanionAgent#skill_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.timeouts"></a>

```python
timeouts: GoogleDialogflowCompanionAgentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#timeouts GoogleDialogflowCompanionAgent#timeouts}

---

##### `toolset_tools`<sup>Optional</sup> <a name="toolset_tools" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.toolsetTools"></a>

```python
toolset_tools: IResolvable | typing.List[GoogleDialogflowCompanionAgentToolsetTools]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>]

toolset_tools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#toolset_tools GoogleDialogflowCompanionAgent#toolset_tools}

---

### GoogleDialogflowCompanionAgentSkillConfigs <a name="GoogleDialogflowCompanionAgentSkillConfigs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs(
  guidance_skill_config: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig = None,
  skill_triggering_event: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs.property.guidanceSkillConfig">guidance_skill_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a></code> | guidance_skill_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs.property.skillTriggeringEvent">skill_triggering_event</a></code> | <code>str</code> | The event that should trigger the skill. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]. |

---

##### `guidance_skill_config`<sup>Optional</sup> <a name="guidance_skill_config" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs.property.guidanceSkillConfig"></a>

```python
guidance_skill_config: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

guidance_skill_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#guidance_skill_config GoogleDialogflowCompanionAgent#guidance_skill_config}

---

##### `skill_triggering_event`<sup>Optional</sup> <a name="skill_triggering_event" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs.property.skillTriggeringEvent"></a>

```python
skill_triggering_event: str
```

- *Type:* str

The event that should trigger the skill. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#skill_triggering_event GoogleDialogflowCompanionAgent#skill_triggering_event}

---

### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig(
  guidance_instructions: IResolvable | typing.List[GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions] = None,
  overarching_guidance: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.guidanceInstructions">guidance_instructions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>]</code> | guidance_instructions block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.overarchingGuidance">overarching_guidance</a></code> | <code>str</code> | This is specific additional guidance that can be configured by the user. |

---

##### `guidance_instructions`<sup>Optional</sup> <a name="guidance_instructions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.guidanceInstructions"></a>

```python
guidance_instructions: IResolvable | typing.List[GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>]

guidance_instructions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#guidance_instructions GoogleDialogflowCompanionAgent#guidance_instructions}

---

##### `overarching_guidance`<sup>Optional</sup> <a name="overarching_guidance" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.overarchingGuidance"></a>

```python
overarching_guidance: str
```

- *Type:* str

This is specific additional guidance that can be configured by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#overarching_guidance GoogleDialogflowCompanionAgent#overarching_guidance}

---

### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions(
  actions: IResolvable | typing.List[GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions] = None,
  condition: str = None,
  disable_suggested_reply: bool | IResolvable = None,
  display_details: str = None,
  display_name: str = None,
  trigger_event: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.actions">actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>]</code> | actions block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.condition">condition</a></code> | <code>str</code> | The condition of the instruction. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.disableSuggestedReply">disable_suggested_reply</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable suggested reply generation for this instruction. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayDetails">display_details</a></code> | <code>str</code> | The detailed description of this instruction. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayName">display_name</a></code> | <code>str</code> | Display name for the instruction. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.triggerEvent">trigger_event</a></code> | <code>str</code> | Event that triggers the guidance instruction. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.actions"></a>

```python
actions: IResolvable | typing.List[GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#actions GoogleDialogflowCompanionAgent#actions}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.condition"></a>

```python
condition: str
```

- *Type:* str

The condition of the instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#condition GoogleDialogflowCompanionAgent#condition}

---

##### `disable_suggested_reply`<sup>Optional</sup> <a name="disable_suggested_reply" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.disableSuggestedReply"></a>

```python
disable_suggested_reply: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to disable suggested reply generation for this instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#disable_suggested_reply GoogleDialogflowCompanionAgent#disable_suggested_reply}

---

##### `display_details`<sup>Optional</sup> <a name="display_details" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayDetails"></a>

```python
display_details: str
```

- *Type:* str

The detailed description of this instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#display_details GoogleDialogflowCompanionAgent#display_details}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name for the instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#display_name GoogleDialogflowCompanionAgent#display_name}

---

##### `trigger_event`<sup>Optional</sup> <a name="trigger_event" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.triggerEvent"></a>

```python
trigger_event: str
```

- *Type:* str

Event that triggers the guidance instruction. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#trigger_event GoogleDialogflowCompanionAgent#trigger_event}

---

### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions(
  description: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions.property.description">description</a></code> | <code>str</code> | Description of action item. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions.property.description"></a>

```python
description: str
```

- *Type:* str

Description of action item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#description GoogleDialogflowCompanionAgent#description}

---

### GoogleDialogflowCompanionAgentTimeouts <a name="GoogleDialogflowCompanionAgentTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#create GoogleDialogflowCompanionAgent#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#delete GoogleDialogflowCompanionAgent#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#update GoogleDialogflowCompanionAgent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#create GoogleDialogflowCompanionAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#delete GoogleDialogflowCompanionAgent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#update GoogleDialogflowCompanionAgent#update}.

---

### GoogleDialogflowCompanionAgentToolsetTools <a name="GoogleDialogflowCompanionAgentToolsetTools" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools(
  toolset: str,
  confirmation_requirement: str = None,
  operation_id: str = None,
  parameter_overrides: IResolvable | typing.List[GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides] = None,
  proactive_enabled: bool | IResolvable = None,
  reactive_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.toolset">toolset</a></code> | <code>str</code> | The name of the toolset to retrieve the schema for. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.confirmationRequirement">confirmation_requirement</a></code> | <code>str</code> | Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.operationId">operation_id</a></code> | <code>str</code> | The 'operationId' field of the OpenAPI endpoint. The 'operationId' must be present in the toolset's definition. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.parameterOverrides">parameter_overrides</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>]</code> | parameter_overrides block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.proactiveEnabled">proactive_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the toolset tool is enabled in proactive mode. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.reactiveEnabled">reactive_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the toolset tool is enabled in reactive mode. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.toolset"></a>

```python
toolset: str
```

- *Type:* str

The name of the toolset to retrieve the schema for. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#toolset GoogleDialogflowCompanionAgent#toolset}

---

##### `confirmation_requirement`<sup>Optional</sup> <a name="confirmation_requirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.confirmationRequirement"></a>

```python
confirmation_requirement: str
```

- *Type:* str

Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#confirmation_requirement GoogleDialogflowCompanionAgent#confirmation_requirement}

---

##### `operation_id`<sup>Optional</sup> <a name="operation_id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.operationId"></a>

```python
operation_id: str
```

- *Type:* str

The 'operationId' field of the OpenAPI endpoint. The 'operationId' must be present in the toolset's definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#operation_id GoogleDialogflowCompanionAgent#operation_id}

---

##### `parameter_overrides`<sup>Optional</sup> <a name="parameter_overrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.parameterOverrides"></a>

```python
parameter_overrides: IResolvable | typing.List[GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>]

parameter_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#parameter_overrides GoogleDialogflowCompanionAgent#parameter_overrides}

---

##### `proactive_enabled`<sup>Optional</sup> <a name="proactive_enabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.proactiveEnabled"></a>

```python
proactive_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the toolset tool is enabled in proactive mode.

NOTE: At least one of 'proactive_enabled' or 'reactive_enabled' should be 'true' else the toolset tool will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#proactive_enabled GoogleDialogflowCompanionAgent#proactive_enabled}

---

##### `reactive_enabled`<sup>Optional</sup> <a name="reactive_enabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.reactiveEnabled"></a>

```python
reactive_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the toolset tool is enabled in reactive mode.

NOTE: At least one of 'reactive_enabled' or 'proactive_enabled' should be 'true' else the toolset tool will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#reactive_enabled GoogleDialogflowCompanionAgent#reactive_enabled}

---

### GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides <a name="GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides(
  context_reference_key: str,
  parameter_name: str,
  field_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.contextReferenceKey">context_reference_key</a></code> | <code>str</code> | The key of the context reference in ingested context references. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.parameterName">parameter_name</a></code> | <code>str</code> | The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.fieldPath">field_path</a></code> | <code>str</code> | The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it). |

---

##### `context_reference_key`<sup>Required</sup> <a name="context_reference_key" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.contextReferenceKey"></a>

```python
context_reference_key: str
```

- *Type:* str

The key of the context reference in ingested context references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#context_reference_key GoogleDialogflowCompanionAgent#context_reference_key}

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#parameter_name GoogleDialogflowCompanionAgent#parameter_name}

---

##### `field_path`<sup>Optional</sup> <a name="field_path" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#field_path GoogleDialogflowCompanionAgent#field_path}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCompanionAgentCesToolSpecsList <a name="GoogleDialogflowCompanionAgentCesToolSpecsList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCompanionAgentCesToolSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDialogflowCompanionAgentCesToolSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>]

---


### GoogleDialogflowCompanionAgentCesToolSpecsOutputReference <a name="GoogleDialogflowCompanionAgentCesToolSpecsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.putParameterOverrides">put_parameter_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetCesTool">reset_ces_tool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetConfirmationRequirement">reset_confirmation_requirement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetParameterOverrides">reset_parameter_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetProactiveEnabled">reset_proactive_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetReactiveEnabled">reset_reactive_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameter_overrides` <a name="put_parameter_overrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.putParameterOverrides"></a>

```python
def put_parameter_overrides(
  value: IResolvable | typing.List[GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.putParameterOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>]

---

##### `reset_ces_tool` <a name="reset_ces_tool" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetCesTool"></a>

```python
def reset_ces_tool() -> None
```

##### `reset_confirmation_requirement` <a name="reset_confirmation_requirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetConfirmationRequirement"></a>

```python
def reset_confirmation_requirement() -> None
```

##### `reset_parameter_overrides` <a name="reset_parameter_overrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetParameterOverrides"></a>

```python
def reset_parameter_overrides() -> None
```

##### `reset_proactive_enabled` <a name="reset_proactive_enabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetProactiveEnabled"></a>

```python
def reset_proactive_enabled() -> None
```

##### `reset_reactive_enabled` <a name="reset_reactive_enabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetReactiveEnabled"></a>

```python
def reset_reactive_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverrides">parameter_overrides</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.cesToolInput">ces_tool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirementInput">confirmation_requirement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverridesInput">parameter_overrides_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabledInput">proactive_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabledInput">reactive_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.cesTool">ces_tool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirement">confirmation_requirement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabled">proactive_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabled">reactive_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_overrides`<sup>Required</sup> <a name="parameter_overrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverrides"></a>

```python
parameter_overrides: GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList</a>

---

##### `ces_tool_input`<sup>Optional</sup> <a name="ces_tool_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.cesToolInput"></a>

```python
ces_tool_input: str
```

- *Type:* str

---

##### `confirmation_requirement_input`<sup>Optional</sup> <a name="confirmation_requirement_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirementInput"></a>

```python
confirmation_requirement_input: str
```

- *Type:* str

---

##### `parameter_overrides_input`<sup>Optional</sup> <a name="parameter_overrides_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverridesInput"></a>

```python
parameter_overrides_input: IResolvable | typing.List[GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>]

---

##### `proactive_enabled_input`<sup>Optional</sup> <a name="proactive_enabled_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabledInput"></a>

```python
proactive_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `reactive_enabled_input`<sup>Optional</sup> <a name="reactive_enabled_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabledInput"></a>

```python
reactive_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ces_tool`<sup>Required</sup> <a name="ces_tool" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.cesTool"></a>

```python
ces_tool: str
```

- *Type:* str

---

##### `confirmation_requirement`<sup>Required</sup> <a name="confirmation_requirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirement"></a>

```python
confirmation_requirement: str
```

- *Type:* str

---

##### `proactive_enabled`<sup>Required</sup> <a name="proactive_enabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabled"></a>

```python
proactive_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `reactive_enabled`<sup>Required</sup> <a name="reactive_enabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabled"></a>

```python
reactive_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDialogflowCompanionAgentCesToolSpecs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>

---


### GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList <a name="GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>]

---


### GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference <a name="GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resetFieldPath">reset_field_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field_path` <a name="reset_field_path" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resetFieldPath"></a>

```python
def reset_field_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKeyInput">context_reference_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPathInput">field_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterNameInput">parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKey">context_reference_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPath">field_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterName">parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `context_reference_key_input`<sup>Optional</sup> <a name="context_reference_key_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKeyInput"></a>

```python
context_reference_key_input: str
```

- *Type:* str

---

##### `field_path_input`<sup>Optional</sup> <a name="field_path_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPathInput"></a>

```python
field_path_input: str
```

- *Type:* str

---

##### `parameter_name_input`<sup>Optional</sup> <a name="parameter_name_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterNameInput"></a>

```python
parameter_name_input: str
```

- *Type:* str

---

##### `context_reference_key`<sup>Required</sup> <a name="context_reference_key" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKey"></a>

```python
context_reference_key: str
```

- *Type:* str

---

##### `field_path`<sup>Required</sup> <a name="field_path" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>

---


### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>]

---


### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>

---


### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>]

---


### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisableSuggestedReply">reset_disable_suggested_reply</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayDetails">reset_display_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetTriggerEvent">reset_trigger_event</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_actions` <a name="put_actions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.putActions"></a>

```python
def put_actions(
  value: IResolvable | typing.List[GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.putActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>]

---

##### `reset_actions` <a name="reset_actions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_disable_suggested_reply` <a name="reset_disable_suggested_reply" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisableSuggestedReply"></a>

```python
def reset_disable_suggested_reply() -> None
```

##### `reset_display_details` <a name="reset_display_details" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayDetails"></a>

```python
def reset_display_details() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_trigger_event` <a name="reset_trigger_event" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetTriggerEvent"></a>

```python
def reset_trigger_event() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actionsInput">actions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReplyInput">disable_suggested_reply_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetailsInput">display_details_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEventInput">trigger_event_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReply">disable_suggested_reply</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetails">display_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEvent">trigger_event</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actions"></a>

```python
actions: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actionsInput"></a>

```python
actions_input: IResolvable | typing.List[GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>]

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `disable_suggested_reply_input`<sup>Optional</sup> <a name="disable_suggested_reply_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReplyInput"></a>

```python
disable_suggested_reply_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_details_input`<sup>Optional</sup> <a name="display_details_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetailsInput"></a>

```python
display_details_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `trigger_event_input`<sup>Optional</sup> <a name="trigger_event_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEventInput"></a>

```python
trigger_event_input: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `disable_suggested_reply`<sup>Required</sup> <a name="disable_suggested_reply" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReply"></a>

```python
disable_suggested_reply: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_details`<sup>Required</sup> <a name="display_details" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetails"></a>

```python
display_details: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `trigger_event`<sup>Required</sup> <a name="trigger_event" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEvent"></a>

```python
trigger_event: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>

---


### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.putGuidanceInstructions">put_guidance_instructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetGuidanceInstructions">reset_guidance_instructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetOverarchingGuidance">reset_overarching_guidance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_guidance_instructions` <a name="put_guidance_instructions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.putGuidanceInstructions"></a>

```python
def put_guidance_instructions(
  value: IResolvable | typing.List[GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.putGuidanceInstructions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>]

---

##### `reset_guidance_instructions` <a name="reset_guidance_instructions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetGuidanceInstructions"></a>

```python
def reset_guidance_instructions() -> None
```

##### `reset_overarching_guidance` <a name="reset_overarching_guidance" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetOverarchingGuidance"></a>

```python
def reset_overarching_guidance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructions">guidance_instructions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructionsInput">guidance_instructions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidanceInput">overarching_guidance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidance">overarching_guidance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `guidance_instructions`<sup>Required</sup> <a name="guidance_instructions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructions"></a>

```python
guidance_instructions: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList</a>

---

##### `guidance_instructions_input`<sup>Optional</sup> <a name="guidance_instructions_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructionsInput"></a>

```python
guidance_instructions_input: IResolvable | typing.List[GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>]

---

##### `overarching_guidance_input`<sup>Optional</sup> <a name="overarching_guidance_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidanceInput"></a>

```python
overarching_guidance_input: str
```

- *Type:* str

---

##### `overarching_guidance`<sup>Required</sup> <a name="overarching_guidance" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidance"></a>

```python
overarching_guidance: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

---


### GoogleDialogflowCompanionAgentSkillConfigsList <a name="GoogleDialogflowCompanionAgentSkillConfigsList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCompanionAgentSkillConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDialogflowCompanionAgentSkillConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>]

---


### GoogleDialogflowCompanionAgentSkillConfigsOutputReference <a name="GoogleDialogflowCompanionAgentSkillConfigsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.putGuidanceSkillConfig">put_guidance_skill_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resetGuidanceSkillConfig">reset_guidance_skill_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resetSkillTriggeringEvent">reset_skill_triggering_event</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_guidance_skill_config` <a name="put_guidance_skill_config" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.putGuidanceSkillConfig"></a>

```python
def put_guidance_skill_config(
  guidance_instructions: IResolvable | typing.List[GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions] = None,
  overarching_guidance: str = None
) -> None
```

###### `guidance_instructions`<sup>Optional</sup> <a name="guidance_instructions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.putGuidanceSkillConfig.parameter.guidanceInstructions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>]

guidance_instructions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#guidance_instructions GoogleDialogflowCompanionAgent#guidance_instructions}

---

###### `overarching_guidance`<sup>Optional</sup> <a name="overarching_guidance" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.putGuidanceSkillConfig.parameter.overarchingGuidance"></a>

- *Type:* str

This is specific additional guidance that can be configured by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#overarching_guidance GoogleDialogflowCompanionAgent#overarching_guidance}

---

##### `reset_guidance_skill_config` <a name="reset_guidance_skill_config" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resetGuidanceSkillConfig"></a>

```python
def reset_guidance_skill_config() -> None
```

##### `reset_skill_triggering_event` <a name="reset_skill_triggering_event" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resetSkillTriggeringEvent"></a>

```python
def reset_skill_triggering_event() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfig">guidance_skill_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfigInput">guidance_skill_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEventInput">skill_triggering_event_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEvent">skill_triggering_event</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `guidance_skill_config`<sup>Required</sup> <a name="guidance_skill_config" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfig"></a>

```python
guidance_skill_config: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference</a>

---

##### `guidance_skill_config_input`<sup>Optional</sup> <a name="guidance_skill_config_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfigInput"></a>

```python
guidance_skill_config_input: GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

---

##### `skill_triggering_event_input`<sup>Optional</sup> <a name="skill_triggering_event_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEventInput"></a>

```python
skill_triggering_event_input: str
```

- *Type:* str

---

##### `skill_triggering_event`<sup>Required</sup> <a name="skill_triggering_event" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEvent"></a>

```python
skill_triggering_event: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDialogflowCompanionAgentSkillConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>

---


### GoogleDialogflowCompanionAgentTimeoutsOutputReference <a name="GoogleDialogflowCompanionAgentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDialogflowCompanionAgentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a>

---


### GoogleDialogflowCompanionAgentToolsetToolsList <a name="GoogleDialogflowCompanionAgentToolsetToolsList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCompanionAgentToolsetToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDialogflowCompanionAgentToolsetTools]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>]

---


### GoogleDialogflowCompanionAgentToolsetToolsOutputReference <a name="GoogleDialogflowCompanionAgentToolsetToolsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.putParameterOverrides">put_parameter_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetConfirmationRequirement">reset_confirmation_requirement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetOperationId">reset_operation_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetParameterOverrides">reset_parameter_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetProactiveEnabled">reset_proactive_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetReactiveEnabled">reset_reactive_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameter_overrides` <a name="put_parameter_overrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.putParameterOverrides"></a>

```python
def put_parameter_overrides(
  value: IResolvable | typing.List[GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.putParameterOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>]

---

##### `reset_confirmation_requirement` <a name="reset_confirmation_requirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetConfirmationRequirement"></a>

```python
def reset_confirmation_requirement() -> None
```

##### `reset_operation_id` <a name="reset_operation_id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetOperationId"></a>

```python
def reset_operation_id() -> None
```

##### `reset_parameter_overrides` <a name="reset_parameter_overrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetParameterOverrides"></a>

```python
def reset_parameter_overrides() -> None
```

##### `reset_proactive_enabled` <a name="reset_proactive_enabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetProactiveEnabled"></a>

```python
def reset_proactive_enabled() -> None
```

##### `reset_reactive_enabled` <a name="reset_reactive_enabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetReactiveEnabled"></a>

```python
def reset_reactive_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverrides">parameter_overrides</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList">GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirementInput">confirmation_requirement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.operationIdInput">operation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverridesInput">parameter_overrides_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabledInput">proactive_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabledInput">reactive_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.toolsetInput">toolset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirement">confirmation_requirement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.operationId">operation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabled">proactive_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabled">reactive_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.toolset">toolset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_overrides`<sup>Required</sup> <a name="parameter_overrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverrides"></a>

```python
parameter_overrides: GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList">GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList</a>

---

##### `confirmation_requirement_input`<sup>Optional</sup> <a name="confirmation_requirement_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirementInput"></a>

```python
confirmation_requirement_input: str
```

- *Type:* str

---

##### `operation_id_input`<sup>Optional</sup> <a name="operation_id_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.operationIdInput"></a>

```python
operation_id_input: str
```

- *Type:* str

---

##### `parameter_overrides_input`<sup>Optional</sup> <a name="parameter_overrides_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverridesInput"></a>

```python
parameter_overrides_input: IResolvable | typing.List[GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>]

---

##### `proactive_enabled_input`<sup>Optional</sup> <a name="proactive_enabled_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabledInput"></a>

```python
proactive_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `reactive_enabled_input`<sup>Optional</sup> <a name="reactive_enabled_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabledInput"></a>

```python
reactive_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `toolset_input`<sup>Optional</sup> <a name="toolset_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.toolsetInput"></a>

```python
toolset_input: str
```

- *Type:* str

---

##### `confirmation_requirement`<sup>Required</sup> <a name="confirmation_requirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirement"></a>

```python
confirmation_requirement: str
```

- *Type:* str

---

##### `operation_id`<sup>Required</sup> <a name="operation_id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.operationId"></a>

```python
operation_id: str
```

- *Type:* str

---

##### `proactive_enabled`<sup>Required</sup> <a name="proactive_enabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabled"></a>

```python
proactive_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `reactive_enabled`<sup>Required</sup> <a name="reactive_enabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabled"></a>

```python
reactive_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.toolset"></a>

```python
toolset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDialogflowCompanionAgentToolsetTools
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>

---


### GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList <a name="GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>]

---


### GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference <a name="GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dialogflow_companion_agent

googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resetFieldPath">reset_field_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field_path` <a name="reset_field_path" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resetFieldPath"></a>

```python
def reset_field_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKeyInput">context_reference_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPathInput">field_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterNameInput">parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKey">context_reference_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPath">field_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterName">parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `context_reference_key_input`<sup>Optional</sup> <a name="context_reference_key_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKeyInput"></a>

```python
context_reference_key_input: str
```

- *Type:* str

---

##### `field_path_input`<sup>Optional</sup> <a name="field_path_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPathInput"></a>

```python
field_path_input: str
```

- *Type:* str

---

##### `parameter_name_input`<sup>Optional</sup> <a name="parameter_name_input" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterNameInput"></a>

```python
parameter_name_input: str
```

- *Type:* str

---

##### `context_reference_key`<sup>Required</sup> <a name="context_reference_key" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKey"></a>

```python
context_reference_key: str
```

- *Type:* str

---

##### `field_path`<sup>Required</sup> <a name="field_path" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>

---



