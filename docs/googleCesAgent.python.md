# `googleCesAgent` Submodule <a name="`googleCesAgent` Submodule" id="@cdktn/provider-google-beta.googleCesAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesAgent <a name="GoogleCesAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent google_ces_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgent(
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
  display_name: str,
  location: str,
  after_agent_callbacks: IResolvable | typing.List[GoogleCesAgentAfterAgentCallbacks] = None,
  after_model_callbacks: IResolvable | typing.List[GoogleCesAgentAfterModelCallbacks] = None,
  after_tool_callbacks: IResolvable | typing.List[GoogleCesAgentAfterToolCallbacks] = None,
  agent_id: str = None,
  before_agent_callbacks: IResolvable | typing.List[GoogleCesAgentBeforeAgentCallbacks] = None,
  before_model_callbacks: IResolvable | typing.List[GoogleCesAgentBeforeModelCallbacks] = None,
  before_tool_callbacks: IResolvable | typing.List[GoogleCesAgentBeforeToolCallbacks] = None,
  child_agents: typing.List[str] = None,
  deletion_policy: str = None,
  description: str = None,
  guardrails: typing.List[str] = None,
  id: str = None,
  instruction: str = None,
  llm_agent: GoogleCesAgentLlmAgent = None,
  model_settings: GoogleCesAgentModelSettings = None,
  project: str = None,
  remote_a2_a_agent: GoogleCesAgentRemoteA2AAgent = None,
  remote_dialogflow_agent: GoogleCesAgentRemoteDialogflowAgent = None,
  timeouts: GoogleCesAgentTimeouts = None,
  tools: typing.List[str] = None,
  toolsets: IResolvable | typing.List[GoogleCesAgentToolsets] = None,
  transfer_rules: IResolvable | typing.List[GoogleCesAgentTransferRules] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name of the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.afterAgentCallbacks">after_agent_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>]</code> | after_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.afterModelCallbacks">after_model_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>]</code> | after_model_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.afterToolCallbacks">after_tool_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>]</code> | after_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.agentId">agent_id</a></code> | <code>str</code> | The ID to use for the agent, which will become the final component of the agent's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.beforeAgentCallbacks">before_agent_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>]</code> | before_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.beforeModelCallbacks">before_model_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>]</code> | before_model_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.beforeToolCallbacks">before_tool_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>]</code> | before_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.childAgents">child_agents</a></code> | <code>typing.List[str]</code> | List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.description">description</a></code> | <code>str</code> | Human-readable description of the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.guardrails">guardrails</a></code> | <code>typing.List[str]</code> | List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#id GoogleCesAgent#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.instruction">instruction</a></code> | <code>str</code> | Instructions for the LLM model to guide the agent's behavior. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.llmAgent">llm_agent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a></code> | llm_agent block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#project GoogleCesAgent#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.remoteA2AAgent">remote_a2_a_agent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a></code> | remote_a2a_agent block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.remoteDialogflowAgent">remote_dialogflow_agent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a></code> | remote_dialogflow_agent block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.tools">tools</a></code> | <code>typing.List[str]</code> | List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.toolsets">toolsets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>]</code> | toolsets block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.transferRules">transfer_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>]</code> | transfer_rules block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.app"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#app GoogleCesAgent#app}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.displayName"></a>

- *Type:* str

Display name of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#display_name GoogleCesAgent#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#location GoogleCesAgent#location}

---

##### `after_agent_callbacks`<sup>Optional</sup> <a name="after_agent_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.afterAgentCallbacks"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>]

after_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#after_agent_callbacks GoogleCesAgent#after_agent_callbacks}

---

##### `after_model_callbacks`<sup>Optional</sup> <a name="after_model_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.afterModelCallbacks"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>]

after_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#after_model_callbacks GoogleCesAgent#after_model_callbacks}

---

##### `after_tool_callbacks`<sup>Optional</sup> <a name="after_tool_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.afterToolCallbacks"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>]

after_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#after_tool_callbacks GoogleCesAgent#after_tool_callbacks}

---

##### `agent_id`<sup>Optional</sup> <a name="agent_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.agentId"></a>

- *Type:* str

The ID to use for the agent, which will become the final component of the agent's resource name.

If not provided, a unique ID will be
automatically assigned for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#agent_id GoogleCesAgent#agent_id}

---

##### `before_agent_callbacks`<sup>Optional</sup> <a name="before_agent_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.beforeAgentCallbacks"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>]

before_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#before_agent_callbacks GoogleCesAgent#before_agent_callbacks}

---

##### `before_model_callbacks`<sup>Optional</sup> <a name="before_model_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.beforeModelCallbacks"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>]

before_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#before_model_callbacks GoogleCesAgent#before_model_callbacks}

---

##### `before_tool_callbacks`<sup>Optional</sup> <a name="before_tool_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.beforeToolCallbacks"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>]

before_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#before_tool_callbacks GoogleCesAgent#before_tool_callbacks}

---

##### `child_agents`<sup>Optional</sup> <a name="child_agents" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.childAgents"></a>

- *Type:* typing.List[str]

List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#child_agents GoogleCesAgent#child_agents}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#deletion_policy GoogleCesAgent#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.description"></a>

- *Type:* str

Human-readable description of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.guardrails"></a>

- *Type:* typing.List[str]

List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#guardrails GoogleCesAgent#guardrails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#id GoogleCesAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.instruction"></a>

- *Type:* str

Instructions for the LLM model to guide the agent's behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#instruction GoogleCesAgent#instruction}

---

##### `llm_agent`<sup>Optional</sup> <a name="llm_agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.llmAgent"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a>

llm_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#llm_agent GoogleCesAgent#llm_agent}

---

##### `model_settings`<sup>Optional</sup> <a name="model_settings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.modelSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#model_settings GoogleCesAgent#model_settings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#project GoogleCesAgent#project}.

---

##### `remote_a2_a_agent`<sup>Optional</sup> <a name="remote_a2_a_agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.remoteA2AAgent"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a>

remote_a2a_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#remote_a2a_agent GoogleCesAgent#remote_a2a_agent}

---

##### `remote_dialogflow_agent`<sup>Optional</sup> <a name="remote_dialogflow_agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.remoteDialogflowAgent"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a>

remote_dialogflow_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#remote_dialogflow_agent GoogleCesAgent#remote_dialogflow_agent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#timeouts GoogleCesAgent#timeouts}

---

##### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.tools"></a>

- *Type:* typing.List[str]

List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#tools GoogleCesAgent#tools}

---

##### `toolsets`<sup>Optional</sup> <a name="toolsets" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.toolsets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>]

toolsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#toolsets GoogleCesAgent#toolsets}

---

##### `transfer_rules`<sup>Optional</sup> <a name="transfer_rules" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.transferRules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>]

transfer_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#transfer_rules GoogleCesAgent#transfer_rules}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterAgentCallbacks">put_after_agent_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterModelCallbacks">put_after_model_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterToolCallbacks">put_after_tool_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeAgentCallbacks">put_before_agent_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeModelCallbacks">put_before_model_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeToolCallbacks">put_before_tool_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putLlmAgent">put_llm_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putModelSettings">put_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteA2AAgent">put_remote_a2_a_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteDialogflowAgent">put_remote_dialogflow_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putToolsets">put_toolsets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTransferRules">put_transfer_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterAgentCallbacks">reset_after_agent_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterModelCallbacks">reset_after_model_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterToolCallbacks">reset_after_tool_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAgentId">reset_agent_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeAgentCallbacks">reset_before_agent_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeModelCallbacks">reset_before_model_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeToolCallbacks">reset_before_tool_callbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetChildAgents">reset_child_agents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetGuardrails">reset_guardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetInstruction">reset_instruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetLlmAgent">reset_llm_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetModelSettings">reset_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetRemoteA2AAgent">reset_remote_a2_a_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetRemoteDialogflowAgent">reset_remote_dialogflow_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTools">reset_tools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetToolsets">reset_toolsets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTransferRules">reset_transfer_rules</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_after_agent_callbacks` <a name="put_after_agent_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterAgentCallbacks"></a>

```python
def put_after_agent_callbacks(
  value: IResolvable | typing.List[GoogleCesAgentAfterAgentCallbacks]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterAgentCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>]

---

##### `put_after_model_callbacks` <a name="put_after_model_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterModelCallbacks"></a>

```python
def put_after_model_callbacks(
  value: IResolvable | typing.List[GoogleCesAgentAfterModelCallbacks]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterModelCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>]

---

##### `put_after_tool_callbacks` <a name="put_after_tool_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterToolCallbacks"></a>

```python
def put_after_tool_callbacks(
  value: IResolvable | typing.List[GoogleCesAgentAfterToolCallbacks]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterToolCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>]

---

##### `put_before_agent_callbacks` <a name="put_before_agent_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeAgentCallbacks"></a>

```python
def put_before_agent_callbacks(
  value: IResolvable | typing.List[GoogleCesAgentBeforeAgentCallbacks]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeAgentCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>]

---

##### `put_before_model_callbacks` <a name="put_before_model_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeModelCallbacks"></a>

```python
def put_before_model_callbacks(
  value: IResolvable | typing.List[GoogleCesAgentBeforeModelCallbacks]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeModelCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>]

---

##### `put_before_tool_callbacks` <a name="put_before_tool_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeToolCallbacks"></a>

```python
def put_before_tool_callbacks(
  value: IResolvable | typing.List[GoogleCesAgentBeforeToolCallbacks]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeToolCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>]

---

##### `put_llm_agent` <a name="put_llm_agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putLlmAgent"></a>

```python
def put_llm_agent() -> None
```

##### `put_model_settings` <a name="put_model_settings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putModelSettings"></a>

```python
def put_model_settings(
  model: str = None,
  temperature: typing.Union[int, float] = None
) -> None
```

###### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putModelSettings.parameter.model"></a>

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#model GoogleCesAgent#model}

---

###### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putModelSettings.parameter.temperature"></a>

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#temperature GoogleCesAgent#temperature}

---

##### `put_remote_a2_a_agent` <a name="put_remote_a2_a_agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteA2AAgent"></a>

```python
def put_remote_a2_a_agent(
  a2_a_config: GoogleCesAgentRemoteA2AAgentA2AConfig
) -> None
```

###### `a2_a_config`<sup>Required</sup> <a name="a2_a_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteA2AAgent.parameter.a2AConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a>

a2a_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#a2a_config GoogleCesAgent#a2a_config}

---

##### `put_remote_dialogflow_agent` <a name="put_remote_dialogflow_agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteDialogflowAgent"></a>

```python
def put_remote_dialogflow_agent(
  agent: str,
  flow_id: str,
  environment_id: str = None,
  input_variable_mapping: typing.Mapping[str] = None,
  language_code_variable: str = None,
  output_variable_mapping: typing.Mapping[str] = None,
  respect_response_interruption_settings: bool | IResolvable = None
) -> None
```

###### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteDialogflowAgent.parameter.agent"></a>

- *Type:* str

The [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents agent resource name. Format: 'projects/{project}/locations/{location}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#agent GoogleCesAgent#agent}

---

###### `flow_id`<sup>Required</sup> <a name="flow_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteDialogflowAgent.parameter.flowId"></a>

- *Type:* str

The flow ID of the flow in the Dialogflow agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#flow_id GoogleCesAgent#flow_id}

---

###### `environment_id`<sup>Optional</sup> <a name="environment_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteDialogflowAgent.parameter.environmentId"></a>

- *Type:* str

The environment ID of the Dialogflow agent be used for the agent execution.

If not specified, the draft environment will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#environment_id GoogleCesAgent#environment_id}

---

###### `input_variable_mapping`<sup>Optional</sup> <a name="input_variable_mapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteDialogflowAgent.parameter.inputVariableMapping"></a>

- *Type:* typing.Mapping[str]

The mapping of the app variables names to the Dialogflow session parameters names to be sent to the Dialogflow agent as input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#input_variable_mapping GoogleCesAgent#input_variable_mapping}

---

###### `language_code_variable`<sup>Optional</sup> <a name="language_code_variable" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteDialogflowAgent.parameter.languageCodeVariable"></a>

- *Type:* str

The name of the variable that contains the language code to be used for the Dialogflow session.

If unspecified, the default language code of the
Dialogflow agent will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#language_code_variable GoogleCesAgent#language_code_variable}

---

###### `output_variable_mapping`<sup>Optional</sup> <a name="output_variable_mapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteDialogflowAgent.parameter.outputVariableMapping"></a>

- *Type:* typing.Mapping[str]

The mapping of the Dialogflow session parameters names to the app variables names to be sent back to the CES agent after the Dialogflow agent execution ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#output_variable_mapping GoogleCesAgent#output_variable_mapping}

---

###### `respect_response_interruption_settings`<sup>Optional</sup> <a name="respect_response_interruption_settings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteDialogflowAgent.parameter.respectResponseInterruptionSettings"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent.

* If false: all response messages from the Dialogflow agent follow the app-level barge-in settings. * If true: only response messages with ['allow_playback_interruption'](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#text) set to true will be interruptable, all other messages follow the app-level barge-in settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#respect_response_interruption_settings GoogleCesAgent#respect_response_interruption_settings}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#create GoogleCesAgent#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#delete GoogleCesAgent#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#update GoogleCesAgent#update}.

---

##### `put_toolsets` <a name="put_toolsets" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putToolsets"></a>

```python
def put_toolsets(
  value: IResolvable | typing.List[GoogleCesAgentToolsets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putToolsets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>]

---

##### `put_transfer_rules` <a name="put_transfer_rules" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTransferRules"></a>

```python
def put_transfer_rules(
  value: IResolvable | typing.List[GoogleCesAgentTransferRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTransferRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>]

---

##### `reset_after_agent_callbacks` <a name="reset_after_agent_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterAgentCallbacks"></a>

```python
def reset_after_agent_callbacks() -> None
```

##### `reset_after_model_callbacks` <a name="reset_after_model_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterModelCallbacks"></a>

```python
def reset_after_model_callbacks() -> None
```

##### `reset_after_tool_callbacks` <a name="reset_after_tool_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterToolCallbacks"></a>

```python
def reset_after_tool_callbacks() -> None
```

##### `reset_agent_id` <a name="reset_agent_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAgentId"></a>

```python
def reset_agent_id() -> None
```

##### `reset_before_agent_callbacks` <a name="reset_before_agent_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeAgentCallbacks"></a>

```python
def reset_before_agent_callbacks() -> None
```

##### `reset_before_model_callbacks` <a name="reset_before_model_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeModelCallbacks"></a>

```python
def reset_before_model_callbacks() -> None
```

##### `reset_before_tool_callbacks` <a name="reset_before_tool_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeToolCallbacks"></a>

```python
def reset_before_tool_callbacks() -> None
```

##### `reset_child_agents` <a name="reset_child_agents" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetChildAgents"></a>

```python
def reset_child_agents() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_guardrails` <a name="reset_guardrails" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetGuardrails"></a>

```python
def reset_guardrails() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instruction` <a name="reset_instruction" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetInstruction"></a>

```python
def reset_instruction() -> None
```

##### `reset_llm_agent` <a name="reset_llm_agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetLlmAgent"></a>

```python
def reset_llm_agent() -> None
```

##### `reset_model_settings` <a name="reset_model_settings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetModelSettings"></a>

```python
def reset_model_settings() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_remote_a2_a_agent` <a name="reset_remote_a2_a_agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetRemoteA2AAgent"></a>

```python
def reset_remote_a2_a_agent() -> None
```

##### `reset_remote_dialogflow_agent` <a name="reset_remote_dialogflow_agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetRemoteDialogflowAgent"></a>

```python
def reset_remote_dialogflow_agent() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tools` <a name="reset_tools" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTools"></a>

```python
def reset_tools() -> None
```

##### `reset_toolsets` <a name="reset_toolsets" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetToolsets"></a>

```python
def reset_toolsets() -> None
```

##### `reset_transfer_rules` <a name="reset_transfer_rules" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTransferRules"></a>

```python
def reset_transfer_rules() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleCesAgent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleCesAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCesAgent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCesAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterAgentCallbacks">after_agent_callbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList">GoogleCesAgentAfterAgentCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterModelCallbacks">after_model_callbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList">GoogleCesAgentAfterModelCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterToolCallbacks">after_tool_callbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList">GoogleCesAgentAfterToolCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeAgentCallbacks">before_agent_callbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList">GoogleCesAgentBeforeAgentCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeModelCallbacks">before_model_callbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList">GoogleCesAgentBeforeModelCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeToolCallbacks">before_tool_callbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList">GoogleCesAgentBeforeToolCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.generatedSummary">generated_summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.llmAgent">llm_agent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference">GoogleCesAgentLlmAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference">GoogleCesAgentModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteA2AAgent">remote_a2_a_agent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference">GoogleCesAgentRemoteA2AAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteDialogflowAgent">remote_dialogflow_agent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference">GoogleCesAgentRemoteDialogflowAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference">GoogleCesAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsets">toolsets</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList">GoogleCesAgentToolsetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.transferRules">transfer_rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList">GoogleCesAgentTransferRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterAgentCallbacksInput">after_agent_callbacks_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterModelCallbacksInput">after_model_callbacks_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterToolCallbacksInput">after_tool_callbacks_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.agentIdInput">agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.appInput">app_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeAgentCallbacksInput">before_agent_callbacks_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeModelCallbacksInput">before_model_callbacks_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeToolCallbacksInput">before_tool_callbacks_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.childAgentsInput">child_agents_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.guardrailsInput">guardrails_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.instructionInput">instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.llmAgentInput">llm_agent_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.modelSettingsInput">model_settings_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteA2AAgentInput">remote_a2_a_agent_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteDialogflowAgentInput">remote_dialogflow_agent_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsetsInput">toolsets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsInput">tools_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.transferRulesInput">transfer_rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.app">app</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.childAgents">child_agents</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.guardrails">guardrails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.instruction">instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.tools">tools</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `after_agent_callbacks`<sup>Required</sup> <a name="after_agent_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterAgentCallbacks"></a>

```python
after_agent_callbacks: GoogleCesAgentAfterAgentCallbacksList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList">GoogleCesAgentAfterAgentCallbacksList</a>

---

##### `after_model_callbacks`<sup>Required</sup> <a name="after_model_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterModelCallbacks"></a>

```python
after_model_callbacks: GoogleCesAgentAfterModelCallbacksList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList">GoogleCesAgentAfterModelCallbacksList</a>

---

##### `after_tool_callbacks`<sup>Required</sup> <a name="after_tool_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterToolCallbacks"></a>

```python
after_tool_callbacks: GoogleCesAgentAfterToolCallbacksList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList">GoogleCesAgentAfterToolCallbacksList</a>

---

##### `before_agent_callbacks`<sup>Required</sup> <a name="before_agent_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeAgentCallbacks"></a>

```python
before_agent_callbacks: GoogleCesAgentBeforeAgentCallbacksList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList">GoogleCesAgentBeforeAgentCallbacksList</a>

---

##### `before_model_callbacks`<sup>Required</sup> <a name="before_model_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeModelCallbacks"></a>

```python
before_model_callbacks: GoogleCesAgentBeforeModelCallbacksList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList">GoogleCesAgentBeforeModelCallbacksList</a>

---

##### `before_tool_callbacks`<sup>Required</sup> <a name="before_tool_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeToolCallbacks"></a>

```python
before_tool_callbacks: GoogleCesAgentBeforeToolCallbacksList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList">GoogleCesAgentBeforeToolCallbacksList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `generated_summary`<sup>Required</sup> <a name="generated_summary" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.generatedSummary"></a>

```python
generated_summary: str
```

- *Type:* str

---

##### `llm_agent`<sup>Required</sup> <a name="llm_agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.llmAgent"></a>

```python
llm_agent: GoogleCesAgentLlmAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference">GoogleCesAgentLlmAgentOutputReference</a>

---

##### `model_settings`<sup>Required</sup> <a name="model_settings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.modelSettings"></a>

```python
model_settings: GoogleCesAgentModelSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference">GoogleCesAgentModelSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `remote_a2_a_agent`<sup>Required</sup> <a name="remote_a2_a_agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteA2AAgent"></a>

```python
remote_a2_a_agent: GoogleCesAgentRemoteA2AAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference">GoogleCesAgentRemoteA2AAgentOutputReference</a>

---

##### `remote_dialogflow_agent`<sup>Required</sup> <a name="remote_dialogflow_agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteDialogflowAgent"></a>

```python
remote_dialogflow_agent: GoogleCesAgentRemoteDialogflowAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference">GoogleCesAgentRemoteDialogflowAgentOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.timeouts"></a>

```python
timeouts: GoogleCesAgentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference">GoogleCesAgentTimeoutsOutputReference</a>

---

##### `toolsets`<sup>Required</sup> <a name="toolsets" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsets"></a>

```python
toolsets: GoogleCesAgentToolsetsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList">GoogleCesAgentToolsetsList</a>

---

##### `transfer_rules`<sup>Required</sup> <a name="transfer_rules" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.transferRules"></a>

```python
transfer_rules: GoogleCesAgentTransferRulesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList">GoogleCesAgentTransferRulesList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `after_agent_callbacks_input`<sup>Optional</sup> <a name="after_agent_callbacks_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterAgentCallbacksInput"></a>

```python
after_agent_callbacks_input: IResolvable | typing.List[GoogleCesAgentAfterAgentCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>]

---

##### `after_model_callbacks_input`<sup>Optional</sup> <a name="after_model_callbacks_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterModelCallbacksInput"></a>

```python
after_model_callbacks_input: IResolvable | typing.List[GoogleCesAgentAfterModelCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>]

---

##### `after_tool_callbacks_input`<sup>Optional</sup> <a name="after_tool_callbacks_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterToolCallbacksInput"></a>

```python
after_tool_callbacks_input: IResolvable | typing.List[GoogleCesAgentAfterToolCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>]

---

##### `agent_id_input`<sup>Optional</sup> <a name="agent_id_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.agentIdInput"></a>

```python
agent_id_input: str
```

- *Type:* str

---

##### `app_input`<sup>Optional</sup> <a name="app_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.appInput"></a>

```python
app_input: str
```

- *Type:* str

---

##### `before_agent_callbacks_input`<sup>Optional</sup> <a name="before_agent_callbacks_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeAgentCallbacksInput"></a>

```python
before_agent_callbacks_input: IResolvable | typing.List[GoogleCesAgentBeforeAgentCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>]

---

##### `before_model_callbacks_input`<sup>Optional</sup> <a name="before_model_callbacks_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeModelCallbacksInput"></a>

```python
before_model_callbacks_input: IResolvable | typing.List[GoogleCesAgentBeforeModelCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>]

---

##### `before_tool_callbacks_input`<sup>Optional</sup> <a name="before_tool_callbacks_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeToolCallbacksInput"></a>

```python
before_tool_callbacks_input: IResolvable | typing.List[GoogleCesAgentBeforeToolCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>]

---

##### `child_agents_input`<sup>Optional</sup> <a name="child_agents_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.childAgentsInput"></a>

```python
child_agents_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `guardrails_input`<sup>Optional</sup> <a name="guardrails_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.guardrailsInput"></a>

```python
guardrails_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instruction_input`<sup>Optional</sup> <a name="instruction_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.instructionInput"></a>

```python
instruction_input: str
```

- *Type:* str

---

##### `llm_agent_input`<sup>Optional</sup> <a name="llm_agent_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.llmAgentInput"></a>

```python
llm_agent_input: GoogleCesAgentLlmAgent
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `model_settings_input`<sup>Optional</sup> <a name="model_settings_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.modelSettingsInput"></a>

```python
model_settings_input: GoogleCesAgentModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `remote_a2_a_agent_input`<sup>Optional</sup> <a name="remote_a2_a_agent_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteA2AAgentInput"></a>

```python
remote_a2_a_agent_input: GoogleCesAgentRemoteA2AAgent
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a>

---

##### `remote_dialogflow_agent_input`<sup>Optional</sup> <a name="remote_dialogflow_agent_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteDialogflowAgentInput"></a>

```python
remote_dialogflow_agent_input: GoogleCesAgentRemoteDialogflowAgent
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleCesAgentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a>

---

##### `toolsets_input`<sup>Optional</sup> <a name="toolsets_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsetsInput"></a>

```python
toolsets_input: IResolvable | typing.List[GoogleCesAgentToolsets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>]

---

##### `tools_input`<sup>Optional</sup> <a name="tools_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsInput"></a>

```python
tools_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `transfer_rules_input`<sup>Optional</sup> <a name="transfer_rules_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.transferRulesInput"></a>

```python
transfer_rules_input: IResolvable | typing.List[GoogleCesAgentTransferRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.app"></a>

```python
app: str
```

- *Type:* str

---

##### `child_agents`<sup>Required</sup> <a name="child_agents" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.childAgents"></a>

```python
child_agents: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `guardrails`<sup>Required</sup> <a name="guardrails" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.guardrails"></a>

```python
guardrails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.tools"></a>

```python
tools: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesAgentAfterAgentCallbacks <a name="GoogleCesAgentAfterAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentAfterAgentCallbacks(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None,
  proactive_execution_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.pythonCode">python_code</a></code> | <code>str</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.description">description</a></code> | <code>str</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `proactive_execution_enabled`<sup>Optional</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#proactive_execution_enabled GoogleCesAgent#proactive_execution_enabled}

---

### GoogleCesAgentAfterModelCallbacks <a name="GoogleCesAgentAfterModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentAfterModelCallbacks(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None,
  proactive_execution_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.pythonCode">python_code</a></code> | <code>str</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.description">description</a></code> | <code>str</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `proactive_execution_enabled`<sup>Optional</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#proactive_execution_enabled GoogleCesAgent#proactive_execution_enabled}

---

### GoogleCesAgentAfterToolCallbacks <a name="GoogleCesAgentAfterToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentAfterToolCallbacks(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None,
  proactive_execution_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.pythonCode">python_code</a></code> | <code>str</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.description">description</a></code> | <code>str</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `proactive_execution_enabled`<sup>Optional</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#proactive_execution_enabled GoogleCesAgent#proactive_execution_enabled}

---

### GoogleCesAgentBeforeAgentCallbacks <a name="GoogleCesAgentBeforeAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentBeforeAgentCallbacks(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None,
  proactive_execution_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.pythonCode">python_code</a></code> | <code>str</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.description">description</a></code> | <code>str</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `proactive_execution_enabled`<sup>Optional</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#proactive_execution_enabled GoogleCesAgent#proactive_execution_enabled}

---

### GoogleCesAgentBeforeModelCallbacks <a name="GoogleCesAgentBeforeModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentBeforeModelCallbacks(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None,
  proactive_execution_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.pythonCode">python_code</a></code> | <code>str</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.description">description</a></code> | <code>str</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `proactive_execution_enabled`<sup>Optional</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#proactive_execution_enabled GoogleCesAgent#proactive_execution_enabled}

---

### GoogleCesAgentBeforeToolCallbacks <a name="GoogleCesAgentBeforeToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentBeforeToolCallbacks(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None,
  proactive_execution_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.pythonCode">python_code</a></code> | <code>str</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.description">description</a></code> | <code>str</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `proactive_execution_enabled`<sup>Optional</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#proactive_execution_enabled GoogleCesAgent#proactive_execution_enabled}

---

### GoogleCesAgentConfig <a name="GoogleCesAgentConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app: str,
  display_name: str,
  location: str,
  after_agent_callbacks: IResolvable | typing.List[GoogleCesAgentAfterAgentCallbacks] = None,
  after_model_callbacks: IResolvable | typing.List[GoogleCesAgentAfterModelCallbacks] = None,
  after_tool_callbacks: IResolvable | typing.List[GoogleCesAgentAfterToolCallbacks] = None,
  agent_id: str = None,
  before_agent_callbacks: IResolvable | typing.List[GoogleCesAgentBeforeAgentCallbacks] = None,
  before_model_callbacks: IResolvable | typing.List[GoogleCesAgentBeforeModelCallbacks] = None,
  before_tool_callbacks: IResolvable | typing.List[GoogleCesAgentBeforeToolCallbacks] = None,
  child_agents: typing.List[str] = None,
  deletion_policy: str = None,
  description: str = None,
  guardrails: typing.List[str] = None,
  id: str = None,
  instruction: str = None,
  llm_agent: GoogleCesAgentLlmAgent = None,
  model_settings: GoogleCesAgentModelSettings = None,
  project: str = None,
  remote_a2_a_agent: GoogleCesAgentRemoteA2AAgent = None,
  remote_dialogflow_agent: GoogleCesAgentRemoteDialogflowAgent = None,
  timeouts: GoogleCesAgentTimeouts = None,
  tools: typing.List[str] = None,
  toolsets: IResolvable | typing.List[GoogleCesAgentToolsets] = None,
  transfer_rules: IResolvable | typing.List[GoogleCesAgentTransferRules] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name of the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterAgentCallbacks">after_agent_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>]</code> | after_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterModelCallbacks">after_model_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>]</code> | after_model_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterToolCallbacks">after_tool_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>]</code> | after_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.agentId">agent_id</a></code> | <code>str</code> | The ID to use for the agent, which will become the final component of the agent's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeAgentCallbacks">before_agent_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>]</code> | before_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeModelCallbacks">before_model_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>]</code> | before_model_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeToolCallbacks">before_tool_callbacks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>]</code> | before_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.childAgents">child_agents</a></code> | <code>typing.List[str]</code> | List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.description">description</a></code> | <code>str</code> | Human-readable description of the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.guardrails">guardrails</a></code> | <code>typing.List[str]</code> | List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#id GoogleCesAgent#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.instruction">instruction</a></code> | <code>str</code> | Instructions for the LLM model to guide the agent's behavior. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.llmAgent">llm_agent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a></code> | llm_agent block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#project GoogleCesAgent#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.remoteA2AAgent">remote_a2_a_agent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a></code> | remote_a2a_agent block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.remoteDialogflowAgent">remote_dialogflow_agent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a></code> | remote_dialogflow_agent block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.tools">tools</a></code> | <code>typing.List[str]</code> | List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.toolsets">toolsets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>]</code> | toolsets block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.transferRules">transfer_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>]</code> | transfer_rules block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.app"></a>

```python
app: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#app GoogleCesAgent#app}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#display_name GoogleCesAgent#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#location GoogleCesAgent#location}

---

##### `after_agent_callbacks`<sup>Optional</sup> <a name="after_agent_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterAgentCallbacks"></a>

```python
after_agent_callbacks: IResolvable | typing.List[GoogleCesAgentAfterAgentCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>]

after_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#after_agent_callbacks GoogleCesAgent#after_agent_callbacks}

---

##### `after_model_callbacks`<sup>Optional</sup> <a name="after_model_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterModelCallbacks"></a>

```python
after_model_callbacks: IResolvable | typing.List[GoogleCesAgentAfterModelCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>]

after_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#after_model_callbacks GoogleCesAgent#after_model_callbacks}

---

##### `after_tool_callbacks`<sup>Optional</sup> <a name="after_tool_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterToolCallbacks"></a>

```python
after_tool_callbacks: IResolvable | typing.List[GoogleCesAgentAfterToolCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>]

after_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#after_tool_callbacks GoogleCesAgent#after_tool_callbacks}

---

##### `agent_id`<sup>Optional</sup> <a name="agent_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

The ID to use for the agent, which will become the final component of the agent's resource name.

If not provided, a unique ID will be
automatically assigned for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#agent_id GoogleCesAgent#agent_id}

---

##### `before_agent_callbacks`<sup>Optional</sup> <a name="before_agent_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeAgentCallbacks"></a>

```python
before_agent_callbacks: IResolvable | typing.List[GoogleCesAgentBeforeAgentCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>]

before_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#before_agent_callbacks GoogleCesAgent#before_agent_callbacks}

---

##### `before_model_callbacks`<sup>Optional</sup> <a name="before_model_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeModelCallbacks"></a>

```python
before_model_callbacks: IResolvable | typing.List[GoogleCesAgentBeforeModelCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>]

before_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#before_model_callbacks GoogleCesAgent#before_model_callbacks}

---

##### `before_tool_callbacks`<sup>Optional</sup> <a name="before_tool_callbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeToolCallbacks"></a>

```python
before_tool_callbacks: IResolvable | typing.List[GoogleCesAgentBeforeToolCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>]

before_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#before_tool_callbacks GoogleCesAgent#before_tool_callbacks}

---

##### `child_agents`<sup>Optional</sup> <a name="child_agents" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.childAgents"></a>

```python
child_agents: typing.List[str]
```

- *Type:* typing.List[str]

List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#child_agents GoogleCesAgent#child_agents}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#deletion_policy GoogleCesAgent#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.guardrails"></a>

```python
guardrails: typing.List[str]
```

- *Type:* typing.List[str]

List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#guardrails GoogleCesAgent#guardrails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#id GoogleCesAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

Instructions for the LLM model to guide the agent's behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#instruction GoogleCesAgent#instruction}

---

##### `llm_agent`<sup>Optional</sup> <a name="llm_agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.llmAgent"></a>

```python
llm_agent: GoogleCesAgentLlmAgent
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a>

llm_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#llm_agent GoogleCesAgent#llm_agent}

---

##### `model_settings`<sup>Optional</sup> <a name="model_settings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.modelSettings"></a>

```python
model_settings: GoogleCesAgentModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#model_settings GoogleCesAgent#model_settings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#project GoogleCesAgent#project}.

---

##### `remote_a2_a_agent`<sup>Optional</sup> <a name="remote_a2_a_agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.remoteA2AAgent"></a>

```python
remote_a2_a_agent: GoogleCesAgentRemoteA2AAgent
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a>

remote_a2a_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#remote_a2a_agent GoogleCesAgent#remote_a2a_agent}

---

##### `remote_dialogflow_agent`<sup>Optional</sup> <a name="remote_dialogflow_agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.remoteDialogflowAgent"></a>

```python
remote_dialogflow_agent: GoogleCesAgentRemoteDialogflowAgent
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a>

remote_dialogflow_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#remote_dialogflow_agent GoogleCesAgent#remote_dialogflow_agent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.timeouts"></a>

```python
timeouts: GoogleCesAgentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#timeouts GoogleCesAgent#timeouts}

---

##### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.tools"></a>

```python
tools: typing.List[str]
```

- *Type:* typing.List[str]

List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#tools GoogleCesAgent#tools}

---

##### `toolsets`<sup>Optional</sup> <a name="toolsets" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.toolsets"></a>

```python
toolsets: IResolvable | typing.List[GoogleCesAgentToolsets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>]

toolsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#toolsets GoogleCesAgent#toolsets}

---

##### `transfer_rules`<sup>Optional</sup> <a name="transfer_rules" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.transferRules"></a>

```python
transfer_rules: IResolvable | typing.List[GoogleCesAgentTransferRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>]

transfer_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#transfer_rules GoogleCesAgent#transfer_rules}

---

### GoogleCesAgentLlmAgent <a name="GoogleCesAgentLlmAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentLlmAgent()
```


### GoogleCesAgentModelSettings <a name="GoogleCesAgentModelSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentModelSettings(
  model: str = None,
  temperature: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings.property.model">model</a></code> | <code>str</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings.property.model"></a>

```python
model: str
```

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#model GoogleCesAgent#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#temperature GoogleCesAgent#temperature}

---

### GoogleCesAgentRemoteA2AAgent <a name="GoogleCesAgentRemoteA2AAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteA2AAgent(
  a2_a_config: GoogleCesAgentRemoteA2AAgentA2AConfig
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent.property.a2AConfig">a2_a_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a></code> | a2a_config block. |

---

##### `a2_a_config`<sup>Required</sup> <a name="a2_a_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent.property.a2AConfig"></a>

```python
a2_a_config: GoogleCesAgentRemoteA2AAgentA2AConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a>

a2a_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#a2a_config GoogleCesAgent#a2a_config}

---

### GoogleCesAgentRemoteA2AAgentA2AConfig <a name="GoogleCesAgentRemoteA2AAgentA2AConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig(
  agent_card: GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard = None,
  agent_registry: str = None,
  api_authentication: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication = None,
  context_id: str = None,
  input_variable_mapping: typing.Mapping[str] = None,
  output_variable_mapping: typing.Mapping[str] = None,
  streaming_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.agentCard">agent_card</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | agent_card block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.agentRegistry">agent_registry</a></code> | <code>str</code> | Reference to the agent in the Agent Registry. Format: 'projects/{project}/locations/{location}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.apiAuthentication">api_authentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | api_authentication block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.contextId">context_id</a></code> | <code>str</code> | If not empty, interactions with the remote A2A agent will use this context ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.inputVariableMapping">input_variable_mapping</a></code> | <code>typing.Mapping[str]</code> | Mapping of input variable names of remote agent to GECX variable names. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.outputVariableMapping">output_variable_mapping</a></code> | <code>typing.Mapping[str]</code> | Mapping of output variable names of remote agent to GECX variable names. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.streamingEnabled">streaming_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether streaming is enabled for the remote agent. |

---

##### `agent_card`<sup>Optional</sup> <a name="agent_card" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.agentCard"></a>

```python
agent_card: GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a>

agent_card block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#agent_card GoogleCesAgent#agent_card}

---

##### `agent_registry`<sup>Optional</sup> <a name="agent_registry" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.agentRegistry"></a>

```python
agent_registry: str
```

- *Type:* str

Reference to the agent in the Agent Registry. Format: 'projects/{project}/locations/{location}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#agent_registry GoogleCesAgent#agent_registry}

---

##### `api_authentication`<sup>Optional</sup> <a name="api_authentication" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.apiAuthentication"></a>

```python
api_authentication: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#api_authentication GoogleCesAgent#api_authentication}

---

##### `context_id`<sup>Optional</sup> <a name="context_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.contextId"></a>

```python
context_id: str
```

- *Type:* str

If not empty, interactions with the remote A2A agent will use this context ID.

This context_id field can refer to a session variable like
'$context.variables.order_agent_session_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#context_id GoogleCesAgent#context_id}

---

##### `input_variable_mapping`<sup>Optional</sup> <a name="input_variable_mapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.inputVariableMapping"></a>

```python
input_variable_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Mapping of input variable names of remote agent to GECX variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#input_variable_mapping GoogleCesAgent#input_variable_mapping}

---

##### `output_variable_mapping`<sup>Optional</sup> <a name="output_variable_mapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.outputVariableMapping"></a>

```python
output_variable_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Mapping of output variable names of remote agent to GECX variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#output_variable_mapping GoogleCesAgent#output_variable_mapping}

---

##### `streaming_enabled`<sup>Optional</sup> <a name="streaming_enabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.streamingEnabled"></a>

```python
streaming_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether streaming is enabled for the remote agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#streaming_enabled GoogleCesAgent#streaming_enabled}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard(
  description: str,
  name: str,
  skills: IResolvable | typing.List[GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills],
  supported_interfaces: IResolvable | typing.List[GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces],
  version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.description">description</a></code> | <code>str</code> | A description of the agent's domain of action/solution space. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.name">name</a></code> | <code>str</code> | A human-readable name for the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.skills">skills</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>]</code> | skills block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.supportedInterfaces">supported_interfaces</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>]</code> | supported_interfaces block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.version">version</a></code> | <code>str</code> | The version of the agent. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the agent's domain of action/solution space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.name"></a>

```python
name: str
```

- *Type:* str

A human-readable name for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#name GoogleCesAgent#name}

---

##### `skills`<sup>Required</sup> <a name="skills" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.skills"></a>

```python
skills: IResolvable | typing.List[GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>]

skills block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#skills GoogleCesAgent#skills}

---

##### `supported_interfaces`<sup>Required</sup> <a name="supported_interfaces" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.supportedInterfaces"></a>

```python
supported_interfaces: IResolvable | typing.List[GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>]

supported_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#supported_interfaces GoogleCesAgent#supported_interfaces}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.version"></a>

```python
version: str
```

- *Type:* str

The version of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#version GoogleCesAgent#version}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills(
  description: str,
  id: str,
  name: str,
  tags: typing.List[str],
  examples: typing.List[str] = None,
  input_modes: typing.List[str] = None,
  output_modes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.description">description</a></code> | <code>str</code> | A detailed description of the skill. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.id">id</a></code> | <code>str</code> | A unique identifier for the agent's skill. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.name">name</a></code> | <code>str</code> | A human-readable name for the skill. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.tags">tags</a></code> | <code>typing.List[str]</code> | A set of keywords describing the skill's capabilities. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.examples">examples</a></code> | <code>typing.List[str]</code> | Example prompts or scenarios that this skill can handle. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.inputModes">input_modes</a></code> | <code>typing.List[str]</code> | The set of supported input media types for this skill, overriding the agent's defaults. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.outputModes">output_modes</a></code> | <code>typing.List[str]</code> | The set of supported output media types for this skill, overriding the agent's defaults. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.description"></a>

```python
description: str
```

- *Type:* str

A detailed description of the skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.id"></a>

```python
id: str
```

- *Type:* str

A unique identifier for the agent's skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#id GoogleCesAgent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.name"></a>

```python
name: str
```

- *Type:* str

A human-readable name for the skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#name GoogleCesAgent#name}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A set of keywords describing the skill's capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#tags GoogleCesAgent#tags}

---

##### `examples`<sup>Optional</sup> <a name="examples" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.examples"></a>

```python
examples: typing.List[str]
```

- *Type:* typing.List[str]

Example prompts or scenarios that this skill can handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#examples GoogleCesAgent#examples}

---

##### `input_modes`<sup>Optional</sup> <a name="input_modes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.inputModes"></a>

```python
input_modes: typing.List[str]
```

- *Type:* typing.List[str]

The set of supported input media types for this skill, overriding the agent's defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#input_modes GoogleCesAgent#input_modes}

---

##### `output_modes`<sup>Optional</sup> <a name="output_modes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.outputModes"></a>

```python
output_modes: typing.List[str]
```

- *Type:* typing.List[str]

The set of supported output media types for this skill, overriding the agent's defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#output_modes GoogleCesAgent#output_modes}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces(
  protocol_binding: str,
  protocol_version: str,
  url: str,
  tenant: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolBinding">protocol_binding</a></code> | <code>str</code> | The protocol binding supported at this URL. The core ones officially supported are JSONRPC, GRPC and HTTP+JSON. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolVersion">protocol_version</a></code> | <code>str</code> | The version of the A2A protocol this interface exposes. Examples: "0.3", "1.0". |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.url">url</a></code> | <code>str</code> | The URL where this interface is available. Must be a valid absolute HTTPS URL in production. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.tenant">tenant</a></code> | <code>str</code> | Tenant ID to be used in the request when calling the agent. |

---

##### `protocol_binding`<sup>Required</sup> <a name="protocol_binding" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolBinding"></a>

```python
protocol_binding: str
```

- *Type:* str

The protocol binding supported at this URL. The core ones officially supported are JSONRPC, GRPC and HTTP+JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#protocol_binding GoogleCesAgent#protocol_binding}

---

##### `protocol_version`<sup>Required</sup> <a name="protocol_version" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolVersion"></a>

```python
protocol_version: str
```

- *Type:* str

The version of the A2A protocol this interface exposes. Examples: "0.3", "1.0".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#protocol_version GoogleCesAgent#protocol_version}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.url"></a>

```python
url: str
```

- *Type:* str

The URL where this interface is available. Must be a valid absolute HTTPS URL in production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#url GoogleCesAgent#url}

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.tenant"></a>

```python
tenant: str
```

- *Type:* str

Tenant ID to be used in the request when calling the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#tenant GoogleCesAgent#tenant}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication(
  api_key_config: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig = None,
  bearer_token_config: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig = None,
  oauth_config: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig = None,
  service_account_auth_config: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.bearerTokenConfig">bearer_token_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.serviceAccountAuthConfig">service_account_auth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | service_account_auth_config block. |

---

##### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.apiKeyConfig"></a>

```python
api_key_config: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#api_key_config GoogleCesAgent#api_key_config}

---

##### `bearer_token_config`<sup>Optional</sup> <a name="bearer_token_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.bearerTokenConfig"></a>

```python
bearer_token_config: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#bearer_token_config GoogleCesAgent#bearer_token_config}

---

##### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.oauthConfig"></a>

```python
oauth_config: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#oauth_config GoogleCesAgent#oauth_config}

---

##### `service_account_auth_config`<sup>Optional</sup> <a name="service_account_auth_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.serviceAccountAuthConfig"></a>

```python
service_account_auth_config: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#service_account_auth_config GoogleCesAgent#service_account_auth_config}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig(
  api_key_secret_version: str,
  key_name: str,
  request_location: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.apiKeySecretVersion">api_key_secret_version</a></code> | <code>str</code> | The name of the SecretManager secret version resource storing the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.keyName">key_name</a></code> | <code>str</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.requestLocation">request_location</a></code> | <code>str</code> | Key location in the request. Possible values: HEADER QUERY_STRING. |

---

##### `api_key_secret_version`<sup>Required</sup> <a name="api_key_secret_version" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.apiKeySecretVersion"></a>

```python
api_key_secret_version: str
```

- *Type:* str

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#api_key_secret_version GoogleCesAgent#api_key_secret_version}

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#key_name GoogleCesAgent#key_name}

---

##### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.requestLocation"></a>

```python
request_location: str
```

- *Type:* str

Key location in the request. Possible values: HEADER QUERY_STRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#request_location GoogleCesAgent#request_location}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig(
  token: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>str</code> | The bearer token. Must be in the format '$context.variables.<name_of_variable>'. |

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.property.token"></a>

```python
token: str
```

- *Type:* str

The bearer token. Must be in the format '$context.variables.<name_of_variable>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#token GoogleCesAgent#token}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig(
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
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientId">client_id</a></code> | <code>str</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientSecretVersion">client_secret_version</a></code> | <code>str</code> | The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.oauthGrantType">oauth_grant_type</a></code> | <code>str</code> | OAuth grant types. Possible values: CLIENT_CREDENTIAL. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | The OAuth scopes to grant. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#client_id GoogleCesAgent#client_id}

---

##### `client_secret_version`<sup>Required</sup> <a name="client_secret_version" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientSecretVersion"></a>

```python
client_secret_version: str
```

- *Type:* str

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#client_secret_version GoogleCesAgent#client_secret_version}

---

##### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.oauthGrantType"></a>

```python
oauth_grant_type: str
```

- *Type:* str

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#oauth_grant_type GoogleCesAgent#oauth_grant_type}

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#token_endpoint GoogleCesAgent#token_endpoint}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#scopes GoogleCesAgent#scopes}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig(
  service_account: str,
  scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | The email address of the service account used for authenticatation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used. |

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.serviceAccount"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#service_account GoogleCesAgent#service_account}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#scopes GoogleCesAgent#scopes}

---

### GoogleCesAgentRemoteDialogflowAgent <a name="GoogleCesAgentRemoteDialogflowAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteDialogflowAgent(
  agent: str,
  flow_id: str,
  environment_id: str = None,
  input_variable_mapping: typing.Mapping[str] = None,
  language_code_variable: str = None,
  output_variable_mapping: typing.Mapping[str] = None,
  respect_response_interruption_settings: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.agent">agent</a></code> | <code>str</code> | The [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents agent resource name. Format: 'projects/{project}/locations/{location}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.flowId">flow_id</a></code> | <code>str</code> | The flow ID of the flow in the Dialogflow agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.environmentId">environment_id</a></code> | <code>str</code> | The environment ID of the Dialogflow agent be used for the agent execution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.inputVariableMapping">input_variable_mapping</a></code> | <code>typing.Mapping[str]</code> | The mapping of the app variables names to the Dialogflow session parameters names to be sent to the Dialogflow agent as input. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.languageCodeVariable">language_code_variable</a></code> | <code>str</code> | The name of the variable that contains the language code to be used for the Dialogflow session. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.outputVariableMapping">output_variable_mapping</a></code> | <code>typing.Mapping[str]</code> | The mapping of the Dialogflow session parameters names to the app variables names to be sent back to the CES agent after the Dialogflow agent execution ends. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.respectResponseInterruptionSettings">respect_response_interruption_settings</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent. |

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.agent"></a>

```python
agent: str
```

- *Type:* str

The [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents agent resource name. Format: 'projects/{project}/locations/{location}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#agent GoogleCesAgent#agent}

---

##### `flow_id`<sup>Required</sup> <a name="flow_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.flowId"></a>

```python
flow_id: str
```

- *Type:* str

The flow ID of the flow in the Dialogflow agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#flow_id GoogleCesAgent#flow_id}

---

##### `environment_id`<sup>Optional</sup> <a name="environment_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

The environment ID of the Dialogflow agent be used for the agent execution.

If not specified, the draft environment will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#environment_id GoogleCesAgent#environment_id}

---

##### `input_variable_mapping`<sup>Optional</sup> <a name="input_variable_mapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.inputVariableMapping"></a>

```python
input_variable_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The mapping of the app variables names to the Dialogflow session parameters names to be sent to the Dialogflow agent as input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#input_variable_mapping GoogleCesAgent#input_variable_mapping}

---

##### `language_code_variable`<sup>Optional</sup> <a name="language_code_variable" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.languageCodeVariable"></a>

```python
language_code_variable: str
```

- *Type:* str

The name of the variable that contains the language code to be used for the Dialogflow session.

If unspecified, the default language code of the
Dialogflow agent will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#language_code_variable GoogleCesAgent#language_code_variable}

---

##### `output_variable_mapping`<sup>Optional</sup> <a name="output_variable_mapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.outputVariableMapping"></a>

```python
output_variable_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The mapping of the Dialogflow session parameters names to the app variables names to be sent back to the CES agent after the Dialogflow agent execution ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#output_variable_mapping GoogleCesAgent#output_variable_mapping}

---

##### `respect_response_interruption_settings`<sup>Optional</sup> <a name="respect_response_interruption_settings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.respectResponseInterruptionSettings"></a>

```python
respect_response_interruption_settings: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent.

* If false: all response messages from the Dialogflow agent follow the app-level barge-in settings. * If true: only response messages with ['allow_playback_interruption'](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#text) set to true will be interruptable, all other messages follow the app-level barge-in settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#respect_response_interruption_settings GoogleCesAgent#respect_response_interruption_settings}

---

### GoogleCesAgentTimeouts <a name="GoogleCesAgentTimeouts" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#create GoogleCesAgent#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#delete GoogleCesAgent#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#update GoogleCesAgent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#create GoogleCesAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#delete GoogleCesAgent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#update GoogleCesAgent#update}.

---

### GoogleCesAgentToolsets <a name="GoogleCesAgentToolsets" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentToolsets(
  toolset: str,
  tool_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets.property.toolset">toolset</a></code> | <code>str</code> | The resource name of the toolset. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets.property.toolIds">tool_ids</a></code> | <code>typing.List[str]</code> | The tools IDs to filter the toolset. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets.property.toolset"></a>

```python
toolset: str
```

- *Type:* str

The resource name of the toolset. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#toolset GoogleCesAgent#toolset}

---

##### `tool_ids`<sup>Optional</sup> <a name="tool_ids" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets.property.toolIds"></a>

```python
tool_ids: typing.List[str]
```

- *Type:* typing.List[str]

The tools IDs to filter the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#tool_ids GoogleCesAgent#tool_ids}

---

### GoogleCesAgentTransferRules <a name="GoogleCesAgentTransferRules" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentTransferRules(
  child_agent: str,
  direction: str,
  deterministic_transfer: GoogleCesAgentTransferRulesDeterministicTransfer = None,
  disable_planner_transfer: GoogleCesAgentTransferRulesDisablePlannerTransfer = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.childAgent">child_agent</a></code> | <code>str</code> | The resource name of the child agent the rule applies to. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.direction">direction</a></code> | <code>str</code> | The direction of the transfer. Possible values: ["PARENT_TO_CHILD", "CHILD_TO_PARENT"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.deterministicTransfer">deterministic_transfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a></code> | deterministic_transfer block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.disablePlannerTransfer">disable_planner_transfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a></code> | disable_planner_transfer block. |

---

##### `child_agent`<sup>Required</sup> <a name="child_agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.childAgent"></a>

```python
child_agent: str
```

- *Type:* str

The resource name of the child agent the rule applies to. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#child_agent GoogleCesAgent#child_agent}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.direction"></a>

```python
direction: str
```

- *Type:* str

The direction of the transfer. Possible values: ["PARENT_TO_CHILD", "CHILD_TO_PARENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#direction GoogleCesAgent#direction}

---

##### `deterministic_transfer`<sup>Optional</sup> <a name="deterministic_transfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.deterministicTransfer"></a>

```python
deterministic_transfer: GoogleCesAgentTransferRulesDeterministicTransfer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a>

deterministic_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#deterministic_transfer GoogleCesAgent#deterministic_transfer}

---

##### `disable_planner_transfer`<sup>Optional</sup> <a name="disable_planner_transfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.disablePlannerTransfer"></a>

```python
disable_planner_transfer: GoogleCesAgentTransferRulesDisablePlannerTransfer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a>

disable_planner_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disable_planner_transfer GoogleCesAgent#disable_planner_transfer}

---

### GoogleCesAgentTransferRulesDeterministicTransfer <a name="GoogleCesAgentTransferRulesDeterministicTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer(
  expression_condition: GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition = None,
  python_code_condition: GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer.property.expressionCondition">expression_condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | expression_condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer.property.pythonCodeCondition">python_code_condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | python_code_condition block. |

---

##### `expression_condition`<sup>Optional</sup> <a name="expression_condition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer.property.expressionCondition"></a>

```python
expression_condition: GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a>

expression_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#expression_condition GoogleCesAgent#expression_condition}

---

##### `python_code_condition`<sup>Optional</sup> <a name="python_code_condition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer.property.pythonCodeCondition"></a>

```python
python_code_condition: GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

python_code_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code_condition GoogleCesAgent#python_code_condition}

---

### GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition <a name="GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition(
  expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition.property.expression">expression</a></code> | <code>str</code> | The string representation of cloud.api.Expression condition. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

The string representation of cloud.api.Expression condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#expression GoogleCesAgent#expression}

---

### GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition <a name="GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition(
  python_code: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition.property.pythonCode">python_code</a></code> | <code>str</code> | The python code to execute. The function must be named 'should_trigger_transfer_callback'. |

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The python code to execute. The function must be named 'should_trigger_transfer_callback'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

### GoogleCesAgentTransferRulesDisablePlannerTransfer <a name="GoogleCesAgentTransferRulesDisablePlannerTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer(
  expression_condition: GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer.property.expressionCondition">expression_condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | expression_condition block. |

---

##### `expression_condition`<sup>Required</sup> <a name="expression_condition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer.property.expressionCondition"></a>

```python
expression_condition: GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

expression_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#expression_condition GoogleCesAgent#expression_condition}

---

### GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition <a name="GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition(
  expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition.property.expression">expression</a></code> | <code>str</code> | The string representation of cloud.api.Expression condition. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

The string representation of cloud.api.Expression condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#expression GoogleCesAgent#expression}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesAgentAfterAgentCallbacksList <a name="GoogleCesAgentAfterAgentCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentAfterAgentCallbacksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesAgentAfterAgentCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesAgentAfterAgentCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>]

---


### GoogleCesAgentAfterAgentCallbacksOutputReference <a name="GoogleCesAgentAfterAgentCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetProactiveExecutionEnabled">reset_proactive_execution_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_proactive_execution_enabled` <a name="reset_proactive_execution_enabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```python
def reset_proactive_execution_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactive_execution_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled_input`<sup>Optional</sup> <a name="proactive_execution_enabled_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```python
proactive_execution_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled`<sup>Required</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesAgentAfterAgentCallbacks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>

---


### GoogleCesAgentAfterModelCallbacksList <a name="GoogleCesAgentAfterModelCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentAfterModelCallbacksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesAgentAfterModelCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesAgentAfterModelCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>]

---


### GoogleCesAgentAfterModelCallbacksOutputReference <a name="GoogleCesAgentAfterModelCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetProactiveExecutionEnabled">reset_proactive_execution_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_proactive_execution_enabled` <a name="reset_proactive_execution_enabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```python
def reset_proactive_execution_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactive_execution_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled_input`<sup>Optional</sup> <a name="proactive_execution_enabled_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```python
proactive_execution_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled`<sup>Required</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesAgentAfterModelCallbacks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>

---


### GoogleCesAgentAfterToolCallbacksList <a name="GoogleCesAgentAfterToolCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentAfterToolCallbacksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesAgentAfterToolCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesAgentAfterToolCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>]

---


### GoogleCesAgentAfterToolCallbacksOutputReference <a name="GoogleCesAgentAfterToolCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetProactiveExecutionEnabled">reset_proactive_execution_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_proactive_execution_enabled` <a name="reset_proactive_execution_enabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```python
def reset_proactive_execution_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactive_execution_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled_input`<sup>Optional</sup> <a name="proactive_execution_enabled_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```python
proactive_execution_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled`<sup>Required</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesAgentAfterToolCallbacks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>

---


### GoogleCesAgentBeforeAgentCallbacksList <a name="GoogleCesAgentBeforeAgentCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesAgentBeforeAgentCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesAgentBeforeAgentCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>]

---


### GoogleCesAgentBeforeAgentCallbacksOutputReference <a name="GoogleCesAgentBeforeAgentCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetProactiveExecutionEnabled">reset_proactive_execution_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_proactive_execution_enabled` <a name="reset_proactive_execution_enabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```python
def reset_proactive_execution_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactive_execution_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled_input`<sup>Optional</sup> <a name="proactive_execution_enabled_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```python
proactive_execution_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled`<sup>Required</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesAgentBeforeAgentCallbacks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>

---


### GoogleCesAgentBeforeModelCallbacksList <a name="GoogleCesAgentBeforeModelCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentBeforeModelCallbacksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesAgentBeforeModelCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesAgentBeforeModelCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>]

---


### GoogleCesAgentBeforeModelCallbacksOutputReference <a name="GoogleCesAgentBeforeModelCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetProactiveExecutionEnabled">reset_proactive_execution_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_proactive_execution_enabled` <a name="reset_proactive_execution_enabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```python
def reset_proactive_execution_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactive_execution_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled_input`<sup>Optional</sup> <a name="proactive_execution_enabled_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```python
proactive_execution_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled`<sup>Required</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesAgentBeforeModelCallbacks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>

---


### GoogleCesAgentBeforeToolCallbacksList <a name="GoogleCesAgentBeforeToolCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentBeforeToolCallbacksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesAgentBeforeToolCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesAgentBeforeToolCallbacks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>]

---


### GoogleCesAgentBeforeToolCallbacksOutputReference <a name="GoogleCesAgentBeforeToolCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetProactiveExecutionEnabled">reset_proactive_execution_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_proactive_execution_enabled` <a name="reset_proactive_execution_enabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```python
def reset_proactive_execution_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactive_execution_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabled">proactive_execution_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled_input`<sup>Optional</sup> <a name="proactive_execution_enabled_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```python
proactive_execution_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proactive_execution_enabled`<sup>Required</sup> <a name="proactive_execution_enabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```python
proactive_execution_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesAgentBeforeToolCallbacks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>

---


### GoogleCesAgentLlmAgentOutputReference <a name="GoogleCesAgentLlmAgentOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentLlmAgentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAgentLlmAgent
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a>

---


### GoogleCesAgentModelSettingsOutputReference <a name="GoogleCesAgentModelSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentModelSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resetModel">reset_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resetTemperature">reset_temperature</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model` <a name="reset_model" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resetModel"></a>

```python
def reset_model() -> None
```

##### `reset_temperature` <a name="reset_temperature" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resetTemperature"></a>

```python
def reset_temperature() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.temperatureInput">temperature_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `temperature_input`<sup>Optional</sup> <a name="temperature_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.temperatureInput"></a>

```python
temperature_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAgentModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills">put_skills</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces">put_supported_interfaces</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_skills` <a name="put_skills" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills"></a>

```python
def put_skills(
  value: IResolvable | typing.List[GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>]

---

##### `put_supported_interfaces` <a name="put_supported_interfaces" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces"></a>

```python
def put_supported_interfaces(
  value: IResolvable | typing.List[GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skills">skills</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfaces">supported_interfaces</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skillsInput">skills_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfacesInput">supported_interfaces_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `skills`<sup>Required</sup> <a name="skills" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skills"></a>

```python
skills: GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList</a>

---

##### `supported_interfaces`<sup>Required</sup> <a name="supported_interfaces" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfaces"></a>

```python
supported_interfaces: GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `skills_input`<sup>Optional</sup> <a name="skills_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skillsInput"></a>

```python
skills_input: IResolvable | typing.List[GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>]

---

##### `supported_interfaces_input`<sup>Optional</sup> <a name="supported_interfaces_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfacesInput"></a>

```python
supported_interfaces_input: IResolvable | typing.List[GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>]

---


### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetExamples">reset_examples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetInputModes">reset_input_modes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetOutputModes">reset_output_modes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_examples` <a name="reset_examples" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetExamples"></a>

```python
def reset_examples() -> None
```

##### `reset_input_modes` <a name="reset_input_modes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetInputModes"></a>

```python
def reset_input_modes() -> None
```

##### `reset_output_modes` <a name="reset_output_modes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetOutputModes"></a>

```python
def reset_output_modes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examplesInput">examples_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModesInput">input_modes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModesInput">output_modes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examples">examples</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModes">input_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModes">output_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `examples_input`<sup>Optional</sup> <a name="examples_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examplesInput"></a>

```python
examples_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_modes_input`<sup>Optional</sup> <a name="input_modes_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModesInput"></a>

```python
input_modes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `output_modes_input`<sup>Optional</sup> <a name="output_modes_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModesInput"></a>

```python
output_modes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `examples`<sup>Required</sup> <a name="examples" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examples"></a>

```python
examples: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_modes`<sup>Required</sup> <a name="input_modes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModes"></a>

```python
input_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_modes`<sup>Required</sup> <a name="output_modes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModes"></a>

```python
output_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>]

---


### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resetTenant">reset_tenant</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tenant` <a name="reset_tenant" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resetTenant"></a>

```python
def reset_tenant() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBindingInput">protocol_binding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersionInput">protocol_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenantInput">tenant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBinding">protocol_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersion">protocol_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenant">tenant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `protocol_binding_input`<sup>Optional</sup> <a name="protocol_binding_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBindingInput"></a>

```python
protocol_binding_input: str
```

- *Type:* str

---

##### `protocol_version_input`<sup>Optional</sup> <a name="protocol_version_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersionInput"></a>

```python
protocol_version_input: str
```

- *Type:* str

---

##### `tenant_input`<sup>Optional</sup> <a name="tenant_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenantInput"></a>

```python
tenant_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `protocol_binding`<sup>Required</sup> <a name="protocol_binding" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBinding"></a>

```python
protocol_binding: str
```

- *Type:* str

---

##### `protocol_version`<sup>Required</sup> <a name="protocol_version" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersion"></a>

```python
protocol_version: str
```

- *Type:* str

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenant"></a>

```python
tenant: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput">api_key_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">request_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion">api_key_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocation">request_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_secret_version_input`<sup>Optional</sup> <a name="api_key_secret_version_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```python
api_key_secret_version_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `request_location_input`<sup>Optional</sup> <a name="request_location_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```python
request_location_input: str
```

- *Type:* str

---

##### `api_key_secret_version`<sup>Required</sup> <a name="api_key_secret_version" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```python
api_key_secret_version: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```python
request_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput">client_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauth_grant_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion">client_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauth_grant_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_version_input`<sup>Optional</sup> <a name="client_secret_version_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput"></a>

```python
client_secret_version_input: str
```

- *Type:* str

---

##### `oauth_grant_type_input`<sup>Optional</sup> <a name="oauth_grant_type_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```python
oauth_grant_type_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret_version`<sup>Required</sup> <a name="client_secret_version" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion"></a>

```python
client_secret_version: str
```

- *Type:* str

---

##### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```python
oauth_grant_type: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig">put_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig">put_bearer_token_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig">put_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig">put_service_account_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetApiKeyConfig">reset_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetBearerTokenConfig">reset_bearer_token_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetOauthConfig">reset_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetServiceAccountAuthConfig">reset_service_account_auth_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key_config` <a name="put_api_key_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig"></a>

```python
def put_api_key_config(
  api_key_secret_version: str,
  key_name: str,
  request_location: str
) -> None
```

###### `api_key_secret_version`<sup>Required</sup> <a name="api_key_secret_version" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig.parameter.apiKeySecretVersion"></a>

- *Type:* str

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#api_key_secret_version GoogleCesAgent#api_key_secret_version}

---

###### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig.parameter.keyName"></a>

- *Type:* str

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#key_name GoogleCesAgent#key_name}

---

###### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig.parameter.requestLocation"></a>

- *Type:* str

Key location in the request. Possible values: HEADER QUERY_STRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#request_location GoogleCesAgent#request_location}

---

##### `put_bearer_token_config` <a name="put_bearer_token_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig"></a>

```python
def put_bearer_token_config(
  token: str
) -> None
```

###### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig.parameter.token"></a>

- *Type:* str

The bearer token. Must be in the format '$context.variables.<name_of_variable>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#token GoogleCesAgent#token}

---

##### `put_oauth_config` <a name="put_oauth_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig"></a>

```python
def put_oauth_config(
  client_id: str,
  client_secret_version: str,
  oauth_grant_type: str,
  token_endpoint: str,
  scopes: typing.List[str] = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig.parameter.clientId"></a>

- *Type:* str

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#client_id GoogleCesAgent#client_id}

---

###### `client_secret_version`<sup>Required</sup> <a name="client_secret_version" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig.parameter.clientSecretVersion"></a>

- *Type:* str

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#client_secret_version GoogleCesAgent#client_secret_version}

---

###### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig.parameter.oauthGrantType"></a>

- *Type:* str

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#oauth_grant_type GoogleCesAgent#oauth_grant_type}

---

###### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig.parameter.tokenEndpoint"></a>

- *Type:* str

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#token_endpoint GoogleCesAgent#token_endpoint}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig.parameter.scopes"></a>

- *Type:* typing.List[str]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#scopes GoogleCesAgent#scopes}

---

##### `put_service_account_auth_config` <a name="put_service_account_auth_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig"></a>

```python
def put_service_account_auth_config(
  service_account: str,
  scopes: typing.List[str] = None
) -> None
```

###### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.serviceAccount"></a>

- *Type:* str

The email address of the service account used for authenticatation.

CES
uses this service account to exchange an access token and the access token
is then sent in the 'Authorization' header of the request.

The service account must have the
'roles/iam.serviceAccountTokenCreator' role granted to the
CES service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#service_account GoogleCesAgent#service_account}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.scopes"></a>

- *Type:* typing.List[str]

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#scopes GoogleCesAgent#scopes}

---

##### `reset_api_key_config` <a name="reset_api_key_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetApiKeyConfig"></a>

```python
def reset_api_key_config() -> None
```

##### `reset_bearer_token_config` <a name="reset_bearer_token_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetBearerTokenConfig"></a>

```python
def reset_bearer_token_config() -> None
```

##### `reset_oauth_config` <a name="reset_oauth_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetOauthConfig"></a>

```python
def reset_oauth_config() -> None
```

##### `reset_service_account_auth_config` <a name="reset_service_account_auth_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetServiceAccountAuthConfig"></a>

```python
def reset_service_account_auth_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfig">bearer_token_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfig">service_account_auth_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfigInput">api_key_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfigInput">bearer_token_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfigInput">oauth_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput">service_account_auth_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_config`<sup>Required</sup> <a name="api_key_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfig"></a>

```python
api_key_config: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearer_token_config`<sup>Required</sup> <a name="bearer_token_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfig"></a>

```python
bearer_token_config: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauth_config`<sup>Required</sup> <a name="oauth_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfig"></a>

```python
oauth_config: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference</a>

---

##### `service_account_auth_config`<sup>Required</sup> <a name="service_account_auth_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfig"></a>

```python
service_account_auth_config: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference</a>

---

##### `api_key_config_input`<sup>Optional</sup> <a name="api_key_config_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```python
api_key_config_input: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

---

##### `bearer_token_config_input`<sup>Optional</sup> <a name="bearer_token_config_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```python
bearer_token_config_input: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

---

##### `oauth_config_input`<sup>Optional</sup> <a name="oauth_config_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfigInput"></a>

```python
oauth_config_input: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

---

##### `service_account_auth_config_input`<sup>Optional</sup> <a name="service_account_auth_config_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput"></a>

```python
service_account_auth_config_input: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard">put_agent_card</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication">put_api_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentCard">reset_agent_card</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentRegistry">reset_agent_registry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetApiAuthentication">reset_api_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetContextId">reset_context_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetInputVariableMapping">reset_input_variable_mapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetOutputVariableMapping">reset_output_variable_mapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetStreamingEnabled">reset_streaming_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_agent_card` <a name="put_agent_card" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard"></a>

```python
def put_agent_card(
  description: str,
  name: str,
  skills: IResolvable | typing.List[GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills],
  supported_interfaces: IResolvable | typing.List[GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces],
  version: str
) -> None
```

###### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard.parameter.description"></a>

- *Type:* str

A description of the agent's domain of action/solution space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard.parameter.name"></a>

- *Type:* str

A human-readable name for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#name GoogleCesAgent#name}

---

###### `skills`<sup>Required</sup> <a name="skills" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard.parameter.skills"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>]

skills block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#skills GoogleCesAgent#skills}

---

###### `supported_interfaces`<sup>Required</sup> <a name="supported_interfaces" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard.parameter.supportedInterfaces"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>]

supported_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#supported_interfaces GoogleCesAgent#supported_interfaces}

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard.parameter.version"></a>

- *Type:* str

The version of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#version GoogleCesAgent#version}

---

##### `put_api_authentication` <a name="put_api_authentication" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication"></a>

```python
def put_api_authentication(
  api_key_config: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig = None,
  bearer_token_config: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig = None,
  oauth_config: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig = None,
  service_account_auth_config: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig = None
) -> None
```

###### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication.parameter.apiKeyConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#api_key_config GoogleCesAgent#api_key_config}

---

###### `bearer_token_config`<sup>Optional</sup> <a name="bearer_token_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication.parameter.bearerTokenConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#bearer_token_config GoogleCesAgent#bearer_token_config}

---

###### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication.parameter.oauthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#oauth_config GoogleCesAgent#oauth_config}

---

###### `service_account_auth_config`<sup>Optional</sup> <a name="service_account_auth_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication.parameter.serviceAccountAuthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#service_account_auth_config GoogleCesAgent#service_account_auth_config}

---

##### `reset_agent_card` <a name="reset_agent_card" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentCard"></a>

```python
def reset_agent_card() -> None
```

##### `reset_agent_registry` <a name="reset_agent_registry" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentRegistry"></a>

```python
def reset_agent_registry() -> None
```

##### `reset_api_authentication` <a name="reset_api_authentication" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetApiAuthentication"></a>

```python
def reset_api_authentication() -> None
```

##### `reset_context_id` <a name="reset_context_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetContextId"></a>

```python
def reset_context_id() -> None
```

##### `reset_input_variable_mapping` <a name="reset_input_variable_mapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetInputVariableMapping"></a>

```python
def reset_input_variable_mapping() -> None
```

##### `reset_output_variable_mapping` <a name="reset_output_variable_mapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetOutputVariableMapping"></a>

```python
def reset_output_variable_mapping() -> None
```

##### `reset_streaming_enabled` <a name="reset_streaming_enabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetStreamingEnabled"></a>

```python
def reset_streaming_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCard">agent_card</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthentication">api_authentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCardInput">agent_card_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistryInput">agent_registry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthenticationInput">api_authentication_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextIdInput">context_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMappingInput">input_variable_mapping_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMappingInput">output_variable_mapping_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabledInput">streaming_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistry">agent_registry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextId">context_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMapping">input_variable_mapping</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMapping">output_variable_mapping</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabled">streaming_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_card`<sup>Required</sup> <a name="agent_card" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCard"></a>

```python
agent_card: GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference</a>

---

##### `api_authentication`<sup>Required</sup> <a name="api_authentication" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthentication"></a>

```python
api_authentication: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference</a>

---

##### `agent_card_input`<sup>Optional</sup> <a name="agent_card_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCardInput"></a>

```python
agent_card_input: GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a>

---

##### `agent_registry_input`<sup>Optional</sup> <a name="agent_registry_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistryInput"></a>

```python
agent_registry_input: str
```

- *Type:* str

---

##### `api_authentication_input`<sup>Optional</sup> <a name="api_authentication_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthenticationInput"></a>

```python
api_authentication_input: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

---

##### `context_id_input`<sup>Optional</sup> <a name="context_id_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextIdInput"></a>

```python
context_id_input: str
```

- *Type:* str

---

##### `input_variable_mapping_input`<sup>Optional</sup> <a name="input_variable_mapping_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMappingInput"></a>

```python
input_variable_mapping_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `output_variable_mapping_input`<sup>Optional</sup> <a name="output_variable_mapping_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMappingInput"></a>

```python
output_variable_mapping_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `streaming_enabled_input`<sup>Optional</sup> <a name="streaming_enabled_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabledInput"></a>

```python
streaming_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `agent_registry`<sup>Required</sup> <a name="agent_registry" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistry"></a>

```python
agent_registry: str
```

- *Type:* str

---

##### `context_id`<sup>Required</sup> <a name="context_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextId"></a>

```python
context_id: str
```

- *Type:* str

---

##### `input_variable_mapping`<sup>Required</sup> <a name="input_variable_mapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMapping"></a>

```python
input_variable_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `output_variable_mapping`<sup>Required</sup> <a name="output_variable_mapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMapping"></a>

```python
output_variable_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `streaming_enabled`<sup>Required</sup> <a name="streaming_enabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabled"></a>

```python
streaming_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAgentRemoteA2AAgentA2AConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a>

---


### GoogleCesAgentRemoteA2AAgentOutputReference <a name="GoogleCesAgentRemoteA2AAgentOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.putA2AConfig">put_a2_a_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_a2_a_config` <a name="put_a2_a_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.putA2AConfig"></a>

```python
def put_a2_a_config(
  agent_card: GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard = None,
  agent_registry: str = None,
  api_authentication: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication = None,
  context_id: str = None,
  input_variable_mapping: typing.Mapping[str] = None,
  output_variable_mapping: typing.Mapping[str] = None,
  streaming_enabled: bool | IResolvable = None
) -> None
```

###### `agent_card`<sup>Optional</sup> <a name="agent_card" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.putA2AConfig.parameter.agentCard"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a>

agent_card block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#agent_card GoogleCesAgent#agent_card}

---

###### `agent_registry`<sup>Optional</sup> <a name="agent_registry" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.putA2AConfig.parameter.agentRegistry"></a>

- *Type:* str

Reference to the agent in the Agent Registry. Format: 'projects/{project}/locations/{location}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#agent_registry GoogleCesAgent#agent_registry}

---

###### `api_authentication`<sup>Optional</sup> <a name="api_authentication" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.putA2AConfig.parameter.apiAuthentication"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#api_authentication GoogleCesAgent#api_authentication}

---

###### `context_id`<sup>Optional</sup> <a name="context_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.putA2AConfig.parameter.contextId"></a>

- *Type:* str

If not empty, interactions with the remote A2A agent will use this context ID.

This context_id field can refer to a session variable like
'$context.variables.order_agent_session_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#context_id GoogleCesAgent#context_id}

---

###### `input_variable_mapping`<sup>Optional</sup> <a name="input_variable_mapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.putA2AConfig.parameter.inputVariableMapping"></a>

- *Type:* typing.Mapping[str]

Mapping of input variable names of remote agent to GECX variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#input_variable_mapping GoogleCesAgent#input_variable_mapping}

---

###### `output_variable_mapping`<sup>Optional</sup> <a name="output_variable_mapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.putA2AConfig.parameter.outputVariableMapping"></a>

- *Type:* typing.Mapping[str]

Mapping of output variable names of remote agent to GECX variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#output_variable_mapping GoogleCesAgent#output_variable_mapping}

---

###### `streaming_enabled`<sup>Optional</sup> <a name="streaming_enabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.putA2AConfig.parameter.streamingEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether streaming is enabled for the remote agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#streaming_enabled GoogleCesAgent#streaming_enabled}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.a2AConfig">a2_a_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.a2AConfigInput">a2_a_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `a2_a_config`<sup>Required</sup> <a name="a2_a_config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.a2AConfig"></a>

```python
a2_a_config: GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference</a>

---

##### `a2_a_config_input`<sup>Optional</sup> <a name="a2_a_config_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.a2AConfigInput"></a>

```python
a2_a_config_input: GoogleCesAgentRemoteA2AAgentA2AConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAgentRemoteA2AAgent
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a>

---


### GoogleCesAgentRemoteDialogflowAgentOutputReference <a name="GoogleCesAgentRemoteDialogflowAgentOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetEnvironmentId">reset_environment_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetInputVariableMapping">reset_input_variable_mapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetLanguageCodeVariable">reset_language_code_variable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetOutputVariableMapping">reset_output_variable_mapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetRespectResponseInterruptionSettings">reset_respect_response_interruption_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_environment_id` <a name="reset_environment_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetEnvironmentId"></a>

```python
def reset_environment_id() -> None
```

##### `reset_input_variable_mapping` <a name="reset_input_variable_mapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetInputVariableMapping"></a>

```python
def reset_input_variable_mapping() -> None
```

##### `reset_language_code_variable` <a name="reset_language_code_variable" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetLanguageCodeVariable"></a>

```python
def reset_language_code_variable() -> None
```

##### `reset_output_variable_mapping` <a name="reset_output_variable_mapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetOutputVariableMapping"></a>

```python
def reset_output_variable_mapping() -> None
```

##### `reset_respect_response_interruption_settings` <a name="reset_respect_response_interruption_settings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetRespectResponseInterruptionSettings"></a>

```python
def reset_respect_response_interruption_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.agentInput">agent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.environmentIdInput">environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.flowIdInput">flow_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMappingInput">input_variable_mapping_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariableInput">language_code_variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMappingInput">output_variable_mapping_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettingsInput">respect_response_interruption_settings_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.agent">agent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.flowId">flow_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMapping">input_variable_mapping</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariable">language_code_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMapping">output_variable_mapping</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettings">respect_response_interruption_settings</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_input`<sup>Optional</sup> <a name="agent_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.agentInput"></a>

```python
agent_input: str
```

- *Type:* str

---

##### `environment_id_input`<sup>Optional</sup> <a name="environment_id_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.environmentIdInput"></a>

```python
environment_id_input: str
```

- *Type:* str

---

##### `flow_id_input`<sup>Optional</sup> <a name="flow_id_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.flowIdInput"></a>

```python
flow_id_input: str
```

- *Type:* str

---

##### `input_variable_mapping_input`<sup>Optional</sup> <a name="input_variable_mapping_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMappingInput"></a>

```python
input_variable_mapping_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `language_code_variable_input`<sup>Optional</sup> <a name="language_code_variable_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariableInput"></a>

```python
language_code_variable_input: str
```

- *Type:* str

---

##### `output_variable_mapping_input`<sup>Optional</sup> <a name="output_variable_mapping_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMappingInput"></a>

```python
output_variable_mapping_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `respect_response_interruption_settings_input`<sup>Optional</sup> <a name="respect_response_interruption_settings_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettingsInput"></a>

```python
respect_response_interruption_settings_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.agent"></a>

```python
agent: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `flow_id`<sup>Required</sup> <a name="flow_id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.flowId"></a>

```python
flow_id: str
```

- *Type:* str

---

##### `input_variable_mapping`<sup>Required</sup> <a name="input_variable_mapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMapping"></a>

```python
input_variable_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `language_code_variable`<sup>Required</sup> <a name="language_code_variable" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariable"></a>

```python
language_code_variable: str
```

- *Type:* str

---

##### `output_variable_mapping`<sup>Required</sup> <a name="output_variable_mapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMapping"></a>

```python
output_variable_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `respect_response_interruption_settings`<sup>Required</sup> <a name="respect_response_interruption_settings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettings"></a>

```python
respect_response_interruption_settings: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAgentRemoteDialogflowAgent
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a>

---


### GoogleCesAgentTimeoutsOutputReference <a name="GoogleCesAgentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesAgentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a>

---


### GoogleCesAgentToolsetsList <a name="GoogleCesAgentToolsetsList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentToolsetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesAgentToolsetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesAgentToolsets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>]

---


### GoogleCesAgentToolsetsOutputReference <a name="GoogleCesAgentToolsetsOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentToolsetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.resetToolIds">reset_tool_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tool_ids` <a name="reset_tool_ids" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.resetToolIds"></a>

```python
def reset_tool_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolIdsInput">tool_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolsetInput">toolset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolIds">tool_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolset">toolset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tool_ids_input`<sup>Optional</sup> <a name="tool_ids_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolIdsInput"></a>

```python
tool_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `toolset_input`<sup>Optional</sup> <a name="toolset_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolsetInput"></a>

```python
toolset_input: str
```

- *Type:* str

---

##### `tool_ids`<sup>Required</sup> <a name="tool_ids" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolIds"></a>

```python
tool_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolset"></a>

```python
toolset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesAgentToolsets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>

---


### GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference <a name="GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a>

---


### GoogleCesAgentTransferRulesDeterministicTransferOutputReference <a name="GoogleCesAgentTransferRulesDeterministicTransferOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition">put_expression_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition">put_python_code_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resetExpressionCondition">reset_expression_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resetPythonCodeCondition">reset_python_code_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_expression_condition` <a name="put_expression_condition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition"></a>

```python
def put_expression_condition(
  expression: str
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition.parameter.expression"></a>

- *Type:* str

The string representation of cloud.api.Expression condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#expression GoogleCesAgent#expression}

---

##### `put_python_code_condition` <a name="put_python_code_condition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition"></a>

```python
def put_python_code_condition(
  python_code: str
) -> None
```

###### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition.parameter.pythonCode"></a>

- *Type:* str

The python code to execute. The function must be named 'should_trigger_transfer_callback'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `reset_expression_condition` <a name="reset_expression_condition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resetExpressionCondition"></a>

```python
def reset_expression_condition() -> None
```

##### `reset_python_code_condition` <a name="reset_python_code_condition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resetPythonCodeCondition"></a>

```python
def reset_python_code_condition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.expressionCondition">expression_condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference">GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeCondition">python_code_condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.expressionConditionInput">expression_condition_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeConditionInput">python_code_condition_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_condition`<sup>Required</sup> <a name="expression_condition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.expressionCondition"></a>

```python
expression_condition: GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference">GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference</a>

---

##### `python_code_condition`<sup>Required</sup> <a name="python_code_condition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeCondition"></a>

```python
python_code_condition: GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference</a>

---

##### `expression_condition_input`<sup>Optional</sup> <a name="expression_condition_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.expressionConditionInput"></a>

```python
expression_condition_input: GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a>

---

##### `python_code_condition_input`<sup>Optional</sup> <a name="python_code_condition_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeConditionInput"></a>

```python
python_code_condition_input: GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAgentTransferRulesDeterministicTransfer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a>

---


### GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference <a name="GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

---


### GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference <a name="GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

---


### GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference <a name="GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition">put_expression_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_expression_condition` <a name="put_expression_condition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition"></a>

```python
def put_expression_condition(
  expression: str
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition.parameter.expression"></a>

- *Type:* str

The string representation of cloud.api.Expression condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#expression GoogleCesAgent#expression}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionCondition">expression_condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionConditionInput">expression_condition_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_condition`<sup>Required</sup> <a name="expression_condition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionCondition"></a>

```python
expression_condition: GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference</a>

---

##### `expression_condition_input`<sup>Optional</sup> <a name="expression_condition_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionConditionInput"></a>

```python
expression_condition_input: GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAgentTransferRulesDisablePlannerTransfer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a>

---


### GoogleCesAgentTransferRulesList <a name="GoogleCesAgentTransferRulesList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentTransferRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesAgentTransferRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesAgentTransferRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>]

---


### GoogleCesAgentTransferRulesOutputReference <a name="GoogleCesAgentTransferRulesOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_agent

googleCesAgent.GoogleCesAgentTransferRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDeterministicTransfer">put_deterministic_transfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDisablePlannerTransfer">put_disable_planner_transfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resetDeterministicTransfer">reset_deterministic_transfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resetDisablePlannerTransfer">reset_disable_planner_transfer</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_deterministic_transfer` <a name="put_deterministic_transfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDeterministicTransfer"></a>

```python
def put_deterministic_transfer(
  expression_condition: GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition = None,
  python_code_condition: GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition = None
) -> None
```

###### `expression_condition`<sup>Optional</sup> <a name="expression_condition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDeterministicTransfer.parameter.expressionCondition"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a>

expression_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#expression_condition GoogleCesAgent#expression_condition}

---

###### `python_code_condition`<sup>Optional</sup> <a name="python_code_condition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDeterministicTransfer.parameter.pythonCodeCondition"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

python_code_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code_condition GoogleCesAgent#python_code_condition}

---

##### `put_disable_planner_transfer` <a name="put_disable_planner_transfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDisablePlannerTransfer"></a>

```python
def put_disable_planner_transfer(
  expression_condition: GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition
) -> None
```

###### `expression_condition`<sup>Required</sup> <a name="expression_condition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDisablePlannerTransfer.parameter.expressionCondition"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

expression_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#expression_condition GoogleCesAgent#expression_condition}

---

##### `reset_deterministic_transfer` <a name="reset_deterministic_transfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resetDeterministicTransfer"></a>

```python
def reset_deterministic_transfer() -> None
```

##### `reset_disable_planner_transfer` <a name="reset_disable_planner_transfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resetDisablePlannerTransfer"></a>

```python
def reset_disable_planner_transfer() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.deterministicTransfer">deterministic_transfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference">GoogleCesAgentTransferRulesDeterministicTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.disablePlannerTransfer">disable_planner_transfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference">GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.childAgentInput">child_agent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.deterministicTransferInput">deterministic_transfer_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.disablePlannerTransferInput">disable_planner_transfer_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.childAgent">child_agent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deterministic_transfer`<sup>Required</sup> <a name="deterministic_transfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.deterministicTransfer"></a>

```python
deterministic_transfer: GoogleCesAgentTransferRulesDeterministicTransferOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference">GoogleCesAgentTransferRulesDeterministicTransferOutputReference</a>

---

##### `disable_planner_transfer`<sup>Required</sup> <a name="disable_planner_transfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.disablePlannerTransfer"></a>

```python
disable_planner_transfer: GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference">GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference</a>

---

##### `child_agent_input`<sup>Optional</sup> <a name="child_agent_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.childAgentInput"></a>

```python
child_agent_input: str
```

- *Type:* str

---

##### `deterministic_transfer_input`<sup>Optional</sup> <a name="deterministic_transfer_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.deterministicTransferInput"></a>

```python
deterministic_transfer_input: GoogleCesAgentTransferRulesDeterministicTransfer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a>

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `disable_planner_transfer_input`<sup>Optional</sup> <a name="disable_planner_transfer_input" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.disablePlannerTransferInput"></a>

```python
disable_planner_transfer_input: GoogleCesAgentTransferRulesDisablePlannerTransfer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a>

---

##### `child_agent`<sup>Required</sup> <a name="child_agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.childAgent"></a>

```python
child_agent: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesAgentTransferRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>

---



