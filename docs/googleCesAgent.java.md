# `googleCesAgent` Submodule <a name="`googleCesAgent` Submodule" id="@cdktn/provider-google-beta.googleCesAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesAgent <a name="GoogleCesAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent google_ces_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgent;

GoogleCesAgent.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .app(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .afterAgentCallbacks(IResolvable|java.util.List<GoogleCesAgentAfterAgentCallbacks>)
//  .afterModelCallbacks(IResolvable|java.util.List<GoogleCesAgentAfterModelCallbacks>)
//  .afterToolCallbacks(IResolvable|java.util.List<GoogleCesAgentAfterToolCallbacks>)
//  .agentId(java.lang.String)
//  .beforeAgentCallbacks(IResolvable|java.util.List<GoogleCesAgentBeforeAgentCallbacks>)
//  .beforeModelCallbacks(IResolvable|java.util.List<GoogleCesAgentBeforeModelCallbacks>)
//  .beforeToolCallbacks(IResolvable|java.util.List<GoogleCesAgentBeforeToolCallbacks>)
//  .childAgents(java.util.List<java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .guardrails(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .instruction(java.lang.String)
//  .llmAgent(GoogleCesAgentLlmAgent)
//  .modelSettings(GoogleCesAgentModelSettings)
//  .project(java.lang.String)
//  .remoteA2AAgent(GoogleCesAgentRemoteA2AAgent)
//  .remoteDialogflowAgent(GoogleCesAgentRemoteDialogflowAgent)
//  .timeouts(GoogleCesAgentTimeouts)
//  .tools(java.util.List<java.lang.String>)
//  .toolsets(IResolvable|java.util.List<GoogleCesAgentToolsets>)
//  .transferRules(IResolvable|java.util.List<GoogleCesAgentTransferRules>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.app">app</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.afterAgentCallbacks">afterAgentCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>></code> | after_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.afterModelCallbacks">afterModelCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>></code> | after_model_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.afterToolCallbacks">afterToolCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>></code> | after_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.agentId">agentId</a></code> | <code>java.lang.String</code> | The ID to use for the agent, which will become the final component of the agent's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.beforeAgentCallbacks">beforeAgentCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>></code> | before_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.beforeModelCallbacks">beforeModelCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>></code> | before_model_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.beforeToolCallbacks">beforeToolCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>></code> | before_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.childAgents">childAgents</a></code> | <code>java.util.List<java.lang.String></code> | List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.guardrails">guardrails</a></code> | <code>java.util.List<java.lang.String></code> | List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#id GoogleCesAgent#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.instruction">instruction</a></code> | <code>java.lang.String</code> | Instructions for the LLM model to guide the agent's behavior. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.llmAgent">llmAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a></code> | llm_agent block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#project GoogleCesAgent#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.remoteA2AAgent">remoteA2AAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a></code> | remote_a2a_agent block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.remoteDialogflowAgent">remoteDialogflowAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a></code> | remote_dialogflow_agent block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.tools">tools</a></code> | <code>java.util.List<java.lang.String></code> | List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.toolsets">toolsets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>></code> | toolsets block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.transferRules">transferRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>></code> | transfer_rules block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.app"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#app GoogleCesAgent#app}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display name of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#display_name GoogleCesAgent#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#location GoogleCesAgent#location}

---

##### `afterAgentCallbacks`<sup>Optional</sup> <a name="afterAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.afterAgentCallbacks"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>>

after_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#after_agent_callbacks GoogleCesAgent#after_agent_callbacks}

---

##### `afterModelCallbacks`<sup>Optional</sup> <a name="afterModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.afterModelCallbacks"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>>

after_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#after_model_callbacks GoogleCesAgent#after_model_callbacks}

---

##### `afterToolCallbacks`<sup>Optional</sup> <a name="afterToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.afterToolCallbacks"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>>

after_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#after_tool_callbacks GoogleCesAgent#after_tool_callbacks}

---

##### `agentId`<sup>Optional</sup> <a name="agentId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.agentId"></a>

- *Type:* java.lang.String

The ID to use for the agent, which will become the final component of the agent's resource name.

If not provided, a unique ID will be
automatically assigned for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#agent_id GoogleCesAgent#agent_id}

---

##### `beforeAgentCallbacks`<sup>Optional</sup> <a name="beforeAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.beforeAgentCallbacks"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>>

before_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#before_agent_callbacks GoogleCesAgent#before_agent_callbacks}

---

##### `beforeModelCallbacks`<sup>Optional</sup> <a name="beforeModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.beforeModelCallbacks"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>>

before_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#before_model_callbacks GoogleCesAgent#before_model_callbacks}

---

##### `beforeToolCallbacks`<sup>Optional</sup> <a name="beforeToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.beforeToolCallbacks"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>>

before_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#before_tool_callbacks GoogleCesAgent#before_tool_callbacks}

---

##### `childAgents`<sup>Optional</sup> <a name="childAgents" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.childAgents"></a>

- *Type:* java.util.List<java.lang.String>

List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#child_agents GoogleCesAgent#child_agents}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

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

- *Type:* java.lang.String

Human-readable description of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.guardrails"></a>

- *Type:* java.util.List<java.lang.String>

List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#guardrails GoogleCesAgent#guardrails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#id GoogleCesAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.instruction"></a>

- *Type:* java.lang.String

Instructions for the LLM model to guide the agent's behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#instruction GoogleCesAgent#instruction}

---

##### `llmAgent`<sup>Optional</sup> <a name="llmAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.llmAgent"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a>

llm_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#llm_agent GoogleCesAgent#llm_agent}

---

##### `modelSettings`<sup>Optional</sup> <a name="modelSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.modelSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#model_settings GoogleCesAgent#model_settings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#project GoogleCesAgent#project}.

---

##### `remoteA2AAgent`<sup>Optional</sup> <a name="remoteA2AAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.remoteA2AAgent"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a>

remote_a2a_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#remote_a2a_agent GoogleCesAgent#remote_a2a_agent}

---

##### `remoteDialogflowAgent`<sup>Optional</sup> <a name="remoteDialogflowAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.remoteDialogflowAgent"></a>

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

- *Type:* java.util.List<java.lang.String>

List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#tools GoogleCesAgent#tools}

---

##### `toolsets`<sup>Optional</sup> <a name="toolsets" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.toolsets"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>>

toolsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#toolsets GoogleCesAgent#toolsets}

---

##### `transferRules`<sup>Optional</sup> <a name="transferRules" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.transferRules"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>>

transfer_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#transfer_rules GoogleCesAgent#transfer_rules}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterAgentCallbacks">putAfterAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterModelCallbacks">putAfterModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterToolCallbacks">putAfterToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeAgentCallbacks">putBeforeAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeModelCallbacks">putBeforeModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeToolCallbacks">putBeforeToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putLlmAgent">putLlmAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putModelSettings">putModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteA2AAgent">putRemoteA2AAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteDialogflowAgent">putRemoteDialogflowAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putToolsets">putToolsets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTransferRules">putTransferRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterAgentCallbacks">resetAfterAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterModelCallbacks">resetAfterModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterToolCallbacks">resetAfterToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAgentId">resetAgentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeAgentCallbacks">resetBeforeAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeModelCallbacks">resetBeforeModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeToolCallbacks">resetBeforeToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetChildAgents">resetChildAgents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetGuardrails">resetGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetLlmAgent">resetLlmAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetModelSettings">resetModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetRemoteA2AAgent">resetRemoteA2AAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetRemoteDialogflowAgent">resetRemoteDialogflowAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTools">resetTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetToolsets">resetToolsets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTransferRules">resetTransferRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAfterAgentCallbacks` <a name="putAfterAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterAgentCallbacks"></a>

```java
public void putAfterAgentCallbacks(IResolvable|java.util.List<GoogleCesAgentAfterAgentCallbacks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterAgentCallbacks.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>>

---

##### `putAfterModelCallbacks` <a name="putAfterModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterModelCallbacks"></a>

```java
public void putAfterModelCallbacks(IResolvable|java.util.List<GoogleCesAgentAfterModelCallbacks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterModelCallbacks.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>>

---

##### `putAfterToolCallbacks` <a name="putAfterToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterToolCallbacks"></a>

```java
public void putAfterToolCallbacks(IResolvable|java.util.List<GoogleCesAgentAfterToolCallbacks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterToolCallbacks.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>>

---

##### `putBeforeAgentCallbacks` <a name="putBeforeAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeAgentCallbacks"></a>

```java
public void putBeforeAgentCallbacks(IResolvable|java.util.List<GoogleCesAgentBeforeAgentCallbacks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeAgentCallbacks.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>>

---

##### `putBeforeModelCallbacks` <a name="putBeforeModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeModelCallbacks"></a>

```java
public void putBeforeModelCallbacks(IResolvable|java.util.List<GoogleCesAgentBeforeModelCallbacks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeModelCallbacks.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>>

---

##### `putBeforeToolCallbacks` <a name="putBeforeToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeToolCallbacks"></a>

```java
public void putBeforeToolCallbacks(IResolvable|java.util.List<GoogleCesAgentBeforeToolCallbacks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeToolCallbacks.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>>

---

##### `putLlmAgent` <a name="putLlmAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putLlmAgent"></a>

```java
public void putLlmAgent(GoogleCesAgentLlmAgent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putLlmAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a>

---

##### `putModelSettings` <a name="putModelSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putModelSettings"></a>

```java
public void putModelSettings(GoogleCesAgentModelSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a>

---

##### `putRemoteA2AAgent` <a name="putRemoteA2AAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteA2AAgent"></a>

```java
public void putRemoteA2AAgent(GoogleCesAgentRemoteA2AAgent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteA2AAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a>

---

##### `putRemoteDialogflowAgent` <a name="putRemoteDialogflowAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteDialogflowAgent"></a>

```java
public void putRemoteDialogflowAgent(GoogleCesAgentRemoteDialogflowAgent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteDialogflowAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTimeouts"></a>

```java
public void putTimeouts(GoogleCesAgentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a>

---

##### `putToolsets` <a name="putToolsets" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putToolsets"></a>

```java
public void putToolsets(IResolvable|java.util.List<GoogleCesAgentToolsets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putToolsets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>>

---

##### `putTransferRules` <a name="putTransferRules" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTransferRules"></a>

```java
public void putTransferRules(IResolvable|java.util.List<GoogleCesAgentTransferRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTransferRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>>

---

##### `resetAfterAgentCallbacks` <a name="resetAfterAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterAgentCallbacks"></a>

```java
public void resetAfterAgentCallbacks()
```

##### `resetAfterModelCallbacks` <a name="resetAfterModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterModelCallbacks"></a>

```java
public void resetAfterModelCallbacks()
```

##### `resetAfterToolCallbacks` <a name="resetAfterToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterToolCallbacks"></a>

```java
public void resetAfterToolCallbacks()
```

##### `resetAgentId` <a name="resetAgentId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAgentId"></a>

```java
public void resetAgentId()
```

##### `resetBeforeAgentCallbacks` <a name="resetBeforeAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeAgentCallbacks"></a>

```java
public void resetBeforeAgentCallbacks()
```

##### `resetBeforeModelCallbacks` <a name="resetBeforeModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeModelCallbacks"></a>

```java
public void resetBeforeModelCallbacks()
```

##### `resetBeforeToolCallbacks` <a name="resetBeforeToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeToolCallbacks"></a>

```java
public void resetBeforeToolCallbacks()
```

##### `resetChildAgents` <a name="resetChildAgents" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetChildAgents"></a>

```java
public void resetChildAgents()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGuardrails` <a name="resetGuardrails" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetGuardrails"></a>

```java
public void resetGuardrails()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetId"></a>

```java
public void resetId()
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetInstruction"></a>

```java
public void resetInstruction()
```

##### `resetLlmAgent` <a name="resetLlmAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetLlmAgent"></a>

```java
public void resetLlmAgent()
```

##### `resetModelSettings` <a name="resetModelSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetModelSettings"></a>

```java
public void resetModelSettings()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetProject"></a>

```java
public void resetProject()
```

##### `resetRemoteA2AAgent` <a name="resetRemoteA2AAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetRemoteA2AAgent"></a>

```java
public void resetRemoteA2AAgent()
```

##### `resetRemoteDialogflowAgent` <a name="resetRemoteDialogflowAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetRemoteDialogflowAgent"></a>

```java
public void resetRemoteDialogflowAgent()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTools` <a name="resetTools" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTools"></a>

```java
public void resetTools()
```

##### `resetToolsets` <a name="resetToolsets" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetToolsets"></a>

```java
public void resetToolsets()
```

##### `resetTransferRules` <a name="resetTransferRules" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTransferRules"></a>

```java
public void resetTransferRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCesAgent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgent;

GoogleCesAgent.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgent;

GoogleCesAgent.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgent;

GoogleCesAgent.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgent;

GoogleCesAgent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleCesAgent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleCesAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleCesAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleCesAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterAgentCallbacks">afterAgentCallbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList">GoogleCesAgentAfterAgentCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterModelCallbacks">afterModelCallbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList">GoogleCesAgentAfterModelCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterToolCallbacks">afterToolCallbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList">GoogleCesAgentAfterToolCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeAgentCallbacks">beforeAgentCallbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList">GoogleCesAgentBeforeAgentCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeModelCallbacks">beforeModelCallbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList">GoogleCesAgentBeforeModelCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeToolCallbacks">beforeToolCallbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList">GoogleCesAgentBeforeToolCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.generatedSummary">generatedSummary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.llmAgent">llmAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference">GoogleCesAgentLlmAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference">GoogleCesAgentModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteA2AAgent">remoteA2AAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference">GoogleCesAgentRemoteA2AAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteDialogflowAgent">remoteDialogflowAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference">GoogleCesAgentRemoteDialogflowAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference">GoogleCesAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsets">toolsets</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList">GoogleCesAgentToolsetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.transferRules">transferRules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList">GoogleCesAgentTransferRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterAgentCallbacksInput">afterAgentCallbacksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterModelCallbacksInput">afterModelCallbacksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterToolCallbacksInput">afterToolCallbacksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.agentIdInput">agentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.appInput">appInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeAgentCallbacksInput">beforeAgentCallbacksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeModelCallbacksInput">beforeModelCallbacksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeToolCallbacksInput">beforeToolCallbacksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.childAgentsInput">childAgentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.guardrailsInput">guardrailsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.instructionInput">instructionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.llmAgentInput">llmAgentInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.modelSettingsInput">modelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteA2AAgentInput">remoteA2AAgentInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteDialogflowAgentInput">remoteDialogflowAgentInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsetsInput">toolsetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsInput">toolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.transferRulesInput">transferRulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.agentId">agentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.app">app</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.childAgents">childAgents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.guardrails">guardrails</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.instruction">instruction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.tools">tools</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `afterAgentCallbacks`<sup>Required</sup> <a name="afterAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterAgentCallbacks"></a>

```java
public GoogleCesAgentAfterAgentCallbacksList getAfterAgentCallbacks();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList">GoogleCesAgentAfterAgentCallbacksList</a>

---

##### `afterModelCallbacks`<sup>Required</sup> <a name="afterModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterModelCallbacks"></a>

```java
public GoogleCesAgentAfterModelCallbacksList getAfterModelCallbacks();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList">GoogleCesAgentAfterModelCallbacksList</a>

---

##### `afterToolCallbacks`<sup>Required</sup> <a name="afterToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterToolCallbacks"></a>

```java
public GoogleCesAgentAfterToolCallbacksList getAfterToolCallbacks();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList">GoogleCesAgentAfterToolCallbacksList</a>

---

##### `beforeAgentCallbacks`<sup>Required</sup> <a name="beforeAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeAgentCallbacks"></a>

```java
public GoogleCesAgentBeforeAgentCallbacksList getBeforeAgentCallbacks();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList">GoogleCesAgentBeforeAgentCallbacksList</a>

---

##### `beforeModelCallbacks`<sup>Required</sup> <a name="beforeModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeModelCallbacks"></a>

```java
public GoogleCesAgentBeforeModelCallbacksList getBeforeModelCallbacks();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList">GoogleCesAgentBeforeModelCallbacksList</a>

---

##### `beforeToolCallbacks`<sup>Required</sup> <a name="beforeToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeToolCallbacks"></a>

```java
public GoogleCesAgentBeforeToolCallbacksList getBeforeToolCallbacks();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList">GoogleCesAgentBeforeToolCallbacksList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `generatedSummary`<sup>Required</sup> <a name="generatedSummary" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.generatedSummary"></a>

```java
public java.lang.String getGeneratedSummary();
```

- *Type:* java.lang.String

---

##### `llmAgent`<sup>Required</sup> <a name="llmAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.llmAgent"></a>

```java
public GoogleCesAgentLlmAgentOutputReference getLlmAgent();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference">GoogleCesAgentLlmAgentOutputReference</a>

---

##### `modelSettings`<sup>Required</sup> <a name="modelSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.modelSettings"></a>

```java
public GoogleCesAgentModelSettingsOutputReference getModelSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference">GoogleCesAgentModelSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `remoteA2AAgent`<sup>Required</sup> <a name="remoteA2AAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteA2AAgent"></a>

```java
public GoogleCesAgentRemoteA2AAgentOutputReference getRemoteA2AAgent();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference">GoogleCesAgentRemoteA2AAgentOutputReference</a>

---

##### `remoteDialogflowAgent`<sup>Required</sup> <a name="remoteDialogflowAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteDialogflowAgent"></a>

```java
public GoogleCesAgentRemoteDialogflowAgentOutputReference getRemoteDialogflowAgent();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference">GoogleCesAgentRemoteDialogflowAgentOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.timeouts"></a>

```java
public GoogleCesAgentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference">GoogleCesAgentTimeoutsOutputReference</a>

---

##### `toolsets`<sup>Required</sup> <a name="toolsets" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsets"></a>

```java
public GoogleCesAgentToolsetsList getToolsets();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList">GoogleCesAgentToolsetsList</a>

---

##### `transferRules`<sup>Required</sup> <a name="transferRules" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.transferRules"></a>

```java
public GoogleCesAgentTransferRulesList getTransferRules();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList">GoogleCesAgentTransferRulesList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `afterAgentCallbacksInput`<sup>Optional</sup> <a name="afterAgentCallbacksInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterAgentCallbacksInput"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentAfterAgentCallbacks> getAfterAgentCallbacksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>>

---

##### `afterModelCallbacksInput`<sup>Optional</sup> <a name="afterModelCallbacksInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterModelCallbacksInput"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentAfterModelCallbacks> getAfterModelCallbacksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>>

---

##### `afterToolCallbacksInput`<sup>Optional</sup> <a name="afterToolCallbacksInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterToolCallbacksInput"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentAfterToolCallbacks> getAfterToolCallbacksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>>

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.agentIdInput"></a>

```java
public java.lang.String getAgentIdInput();
```

- *Type:* java.lang.String

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.appInput"></a>

```java
public java.lang.String getAppInput();
```

- *Type:* java.lang.String

---

##### `beforeAgentCallbacksInput`<sup>Optional</sup> <a name="beforeAgentCallbacksInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeAgentCallbacksInput"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentBeforeAgentCallbacks> getBeforeAgentCallbacksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>>

---

##### `beforeModelCallbacksInput`<sup>Optional</sup> <a name="beforeModelCallbacksInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeModelCallbacksInput"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentBeforeModelCallbacks> getBeforeModelCallbacksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>>

---

##### `beforeToolCallbacksInput`<sup>Optional</sup> <a name="beforeToolCallbacksInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeToolCallbacksInput"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentBeforeToolCallbacks> getBeforeToolCallbacksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>>

---

##### `childAgentsInput`<sup>Optional</sup> <a name="childAgentsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.childAgentsInput"></a>

```java
public java.util.List<java.lang.String> getChildAgentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `guardrailsInput`<sup>Optional</sup> <a name="guardrailsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.guardrailsInput"></a>

```java
public java.util.List<java.lang.String> getGuardrailsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.instructionInput"></a>

```java
public java.lang.String getInstructionInput();
```

- *Type:* java.lang.String

---

##### `llmAgentInput`<sup>Optional</sup> <a name="llmAgentInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.llmAgentInput"></a>

```java
public GoogleCesAgentLlmAgent getLlmAgentInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `modelSettingsInput`<sup>Optional</sup> <a name="modelSettingsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.modelSettingsInput"></a>

```java
public GoogleCesAgentModelSettings getModelSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `remoteA2AAgentInput`<sup>Optional</sup> <a name="remoteA2AAgentInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteA2AAgentInput"></a>

```java
public GoogleCesAgentRemoteA2AAgent getRemoteA2AAgentInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a>

---

##### `remoteDialogflowAgentInput`<sup>Optional</sup> <a name="remoteDialogflowAgentInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteDialogflowAgentInput"></a>

```java
public GoogleCesAgentRemoteDialogflowAgent getRemoteDialogflowAgentInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.timeoutsInput"></a>

```java
public IResolvable|GoogleCesAgentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a>

---

##### `toolsetsInput`<sup>Optional</sup> <a name="toolsetsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsetsInput"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentToolsets> getToolsetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>>

---

##### `toolsInput`<sup>Optional</sup> <a name="toolsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsInput"></a>

```java
public java.util.List<java.lang.String> getToolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `transferRulesInput`<sup>Optional</sup> <a name="transferRulesInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.transferRulesInput"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentTransferRules> getTransferRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>>

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.agentId"></a>

```java
public java.lang.String getAgentId();
```

- *Type:* java.lang.String

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.app"></a>

```java
public java.lang.String getApp();
```

- *Type:* java.lang.String

---

##### `childAgents`<sup>Required</sup> <a name="childAgents" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.childAgents"></a>

```java
public java.util.List<java.lang.String> getChildAgents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `guardrails`<sup>Required</sup> <a name="guardrails" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.guardrails"></a>

```java
public java.util.List<java.lang.String> getGuardrails();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.instruction"></a>

```java
public java.lang.String getInstruction();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.tools"></a>

```java
public java.util.List<java.lang.String> getTools();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesAgentAfterAgentCallbacks <a name="GoogleCesAgentAfterAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentAfterAgentCallbacks;

GoogleCesAgentAfterAgentCallbacks.builder()
    .pythonCode(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .proactiveExecutionEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

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

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentAfterModelCallbacks;

GoogleCesAgentAfterModelCallbacks.builder()
    .pythonCode(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .proactiveExecutionEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

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

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentAfterToolCallbacks;

GoogleCesAgentAfterToolCallbacks.builder()
    .pythonCode(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .proactiveExecutionEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

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

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentBeforeAgentCallbacks;

GoogleCesAgentBeforeAgentCallbacks.builder()
    .pythonCode(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .proactiveExecutionEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

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

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentBeforeModelCallbacks;

GoogleCesAgentBeforeModelCallbacks.builder()
    .pythonCode(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .proactiveExecutionEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

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

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentBeforeToolCallbacks;

GoogleCesAgentBeforeToolCallbacks.builder()
    .pythonCode(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .proactiveExecutionEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

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

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentConfig;

GoogleCesAgentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .app(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .afterAgentCallbacks(IResolvable|java.util.List<GoogleCesAgentAfterAgentCallbacks>)
//  .afterModelCallbacks(IResolvable|java.util.List<GoogleCesAgentAfterModelCallbacks>)
//  .afterToolCallbacks(IResolvable|java.util.List<GoogleCesAgentAfterToolCallbacks>)
//  .agentId(java.lang.String)
//  .beforeAgentCallbacks(IResolvable|java.util.List<GoogleCesAgentBeforeAgentCallbacks>)
//  .beforeModelCallbacks(IResolvable|java.util.List<GoogleCesAgentBeforeModelCallbacks>)
//  .beforeToolCallbacks(IResolvable|java.util.List<GoogleCesAgentBeforeToolCallbacks>)
//  .childAgents(java.util.List<java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .guardrails(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .instruction(java.lang.String)
//  .llmAgent(GoogleCesAgentLlmAgent)
//  .modelSettings(GoogleCesAgentModelSettings)
//  .project(java.lang.String)
//  .remoteA2AAgent(GoogleCesAgentRemoteA2AAgent)
//  .remoteDialogflowAgent(GoogleCesAgentRemoteDialogflowAgent)
//  .timeouts(GoogleCesAgentTimeouts)
//  .tools(java.util.List<java.lang.String>)
//  .toolsets(IResolvable|java.util.List<GoogleCesAgentToolsets>)
//  .transferRules(IResolvable|java.util.List<GoogleCesAgentTransferRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.app">app</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterAgentCallbacks">afterAgentCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>></code> | after_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterModelCallbacks">afterModelCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>></code> | after_model_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterToolCallbacks">afterToolCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>></code> | after_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.agentId">agentId</a></code> | <code>java.lang.String</code> | The ID to use for the agent, which will become the final component of the agent's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeAgentCallbacks">beforeAgentCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>></code> | before_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeModelCallbacks">beforeModelCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>></code> | before_model_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeToolCallbacks">beforeToolCallbacks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>></code> | before_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.childAgents">childAgents</a></code> | <code>java.util.List<java.lang.String></code> | List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.guardrails">guardrails</a></code> | <code>java.util.List<java.lang.String></code> | List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#id GoogleCesAgent#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.instruction">instruction</a></code> | <code>java.lang.String</code> | Instructions for the LLM model to guide the agent's behavior. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.llmAgent">llmAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a></code> | llm_agent block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#project GoogleCesAgent#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.remoteA2AAgent">remoteA2AAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a></code> | remote_a2a_agent block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.remoteDialogflowAgent">remoteDialogflowAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a></code> | remote_dialogflow_agent block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.tools">tools</a></code> | <code>java.util.List<java.lang.String></code> | List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.toolsets">toolsets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>></code> | toolsets block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.transferRules">transferRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>></code> | transfer_rules block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.app"></a>

```java
public java.lang.String getApp();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#app GoogleCesAgent#app}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#display_name GoogleCesAgent#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#location GoogleCesAgent#location}

---

##### `afterAgentCallbacks`<sup>Optional</sup> <a name="afterAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterAgentCallbacks"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentAfterAgentCallbacks> getAfterAgentCallbacks();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>>

after_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#after_agent_callbacks GoogleCesAgent#after_agent_callbacks}

---

##### `afterModelCallbacks`<sup>Optional</sup> <a name="afterModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterModelCallbacks"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentAfterModelCallbacks> getAfterModelCallbacks();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>>

after_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#after_model_callbacks GoogleCesAgent#after_model_callbacks}

---

##### `afterToolCallbacks`<sup>Optional</sup> <a name="afterToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterToolCallbacks"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentAfterToolCallbacks> getAfterToolCallbacks();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>>

after_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#after_tool_callbacks GoogleCesAgent#after_tool_callbacks}

---

##### `agentId`<sup>Optional</sup> <a name="agentId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.agentId"></a>

```java
public java.lang.String getAgentId();
```

- *Type:* java.lang.String

The ID to use for the agent, which will become the final component of the agent's resource name.

If not provided, a unique ID will be
automatically assigned for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#agent_id GoogleCesAgent#agent_id}

---

##### `beforeAgentCallbacks`<sup>Optional</sup> <a name="beforeAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeAgentCallbacks"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentBeforeAgentCallbacks> getBeforeAgentCallbacks();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>>

before_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#before_agent_callbacks GoogleCesAgent#before_agent_callbacks}

---

##### `beforeModelCallbacks`<sup>Optional</sup> <a name="beforeModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeModelCallbacks"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentBeforeModelCallbacks> getBeforeModelCallbacks();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>>

before_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#before_model_callbacks GoogleCesAgent#before_model_callbacks}

---

##### `beforeToolCallbacks`<sup>Optional</sup> <a name="beforeToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeToolCallbacks"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentBeforeToolCallbacks> getBeforeToolCallbacks();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>>

before_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#before_tool_callbacks GoogleCesAgent#before_tool_callbacks}

---

##### `childAgents`<sup>Optional</sup> <a name="childAgents" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.childAgents"></a>

```java
public java.util.List<java.lang.String> getChildAgents();
```

- *Type:* java.util.List<java.lang.String>

List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#child_agents GoogleCesAgent#child_agents}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

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

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.guardrails"></a>

```java
public java.util.List<java.lang.String> getGuardrails();
```

- *Type:* java.util.List<java.lang.String>

List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#guardrails GoogleCesAgent#guardrails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#id GoogleCesAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.instruction"></a>

```java
public java.lang.String getInstruction();
```

- *Type:* java.lang.String

Instructions for the LLM model to guide the agent's behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#instruction GoogleCesAgent#instruction}

---

##### `llmAgent`<sup>Optional</sup> <a name="llmAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.llmAgent"></a>

```java
public GoogleCesAgentLlmAgent getLlmAgent();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a>

llm_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#llm_agent GoogleCesAgent#llm_agent}

---

##### `modelSettings`<sup>Optional</sup> <a name="modelSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.modelSettings"></a>

```java
public GoogleCesAgentModelSettings getModelSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#model_settings GoogleCesAgent#model_settings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#project GoogleCesAgent#project}.

---

##### `remoteA2AAgent`<sup>Optional</sup> <a name="remoteA2AAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.remoteA2AAgent"></a>

```java
public GoogleCesAgentRemoteA2AAgent getRemoteA2AAgent();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a>

remote_a2a_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#remote_a2a_agent GoogleCesAgent#remote_a2a_agent}

---

##### `remoteDialogflowAgent`<sup>Optional</sup> <a name="remoteDialogflowAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.remoteDialogflowAgent"></a>

```java
public GoogleCesAgentRemoteDialogflowAgent getRemoteDialogflowAgent();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a>

remote_dialogflow_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#remote_dialogflow_agent GoogleCesAgent#remote_dialogflow_agent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.timeouts"></a>

```java
public GoogleCesAgentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#timeouts GoogleCesAgent#timeouts}

---

##### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.tools"></a>

```java
public java.util.List<java.lang.String> getTools();
```

- *Type:* java.util.List<java.lang.String>

List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#tools GoogleCesAgent#tools}

---

##### `toolsets`<sup>Optional</sup> <a name="toolsets" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.toolsets"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentToolsets> getToolsets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>>

toolsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#toolsets GoogleCesAgent#toolsets}

---

##### `transferRules`<sup>Optional</sup> <a name="transferRules" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.transferRules"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentTransferRules> getTransferRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>>

transfer_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#transfer_rules GoogleCesAgent#transfer_rules}

---

### GoogleCesAgentLlmAgent <a name="GoogleCesAgentLlmAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentLlmAgent;

GoogleCesAgentLlmAgent.builder()
    .build();
```


### GoogleCesAgentModelSettings <a name="GoogleCesAgentModelSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentModelSettings;

GoogleCesAgentModelSettings.builder()
//  .model(java.lang.String)
//  .temperature(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings.property.model">model</a></code> | <code>java.lang.String</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#model GoogleCesAgent#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#temperature GoogleCesAgent#temperature}

---

### GoogleCesAgentRemoteA2AAgent <a name="GoogleCesAgentRemoteA2AAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteA2AAgent;

GoogleCesAgentRemoteA2AAgent.builder()
    .a2AConfig(GoogleCesAgentRemoteA2AAgentA2AConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent.property.a2AConfig">a2AConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a></code> | a2a_config block. |

---

##### `a2AConfig`<sup>Required</sup> <a name="a2AConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent.property.a2AConfig"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfig getA2AConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a>

a2a_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#a2a_config GoogleCesAgent#a2a_config}

---

### GoogleCesAgentRemoteA2AAgentA2AConfig <a name="GoogleCesAgentRemoteA2AAgentA2AConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteA2AAgentA2AConfig;

GoogleCesAgentRemoteA2AAgentA2AConfig.builder()
//  .agentCard(GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard)
//  .agentRegistry(java.lang.String)
//  .apiAuthentication(GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication)
//  .contextId(java.lang.String)
//  .inputVariableMapping(java.util.Map<java.lang.String, java.lang.String>)
//  .outputVariableMapping(java.util.Map<java.lang.String, java.lang.String>)
//  .streamingEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.agentCard">agentCard</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | agent_card block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.agentRegistry">agentRegistry</a></code> | <code>java.lang.String</code> | Reference to the agent in the Agent Registry. Format: 'projects/{project}/locations/{location}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.apiAuthentication">apiAuthentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | api_authentication block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.contextId">contextId</a></code> | <code>java.lang.String</code> | If not empty, interactions with the remote A2A agent will use this context ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.inputVariableMapping">inputVariableMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Mapping of input variable names of remote agent to GECX variable names. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.outputVariableMapping">outputVariableMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Mapping of output variable names of remote agent to GECX variable names. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.streamingEnabled">streamingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether streaming is enabled for the remote agent. |

---

##### `agentCard`<sup>Optional</sup> <a name="agentCard" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.agentCard"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard getAgentCard();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a>

agent_card block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#agent_card GoogleCesAgent#agent_card}

---

##### `agentRegistry`<sup>Optional</sup> <a name="agentRegistry" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.agentRegistry"></a>

```java
public java.lang.String getAgentRegistry();
```

- *Type:* java.lang.String

Reference to the agent in the Agent Registry. Format: 'projects/{project}/locations/{location}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#agent_registry GoogleCesAgent#agent_registry}

---

##### `apiAuthentication`<sup>Optional</sup> <a name="apiAuthentication" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.apiAuthentication"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication getApiAuthentication();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#api_authentication GoogleCesAgent#api_authentication}

---

##### `contextId`<sup>Optional</sup> <a name="contextId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.contextId"></a>

```java
public java.lang.String getContextId();
```

- *Type:* java.lang.String

If not empty, interactions with the remote A2A agent will use this context ID.

This context_id field can refer to a session variable like
'$context.variables.order_agent_session_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#context_id GoogleCesAgent#context_id}

---

##### `inputVariableMapping`<sup>Optional</sup> <a name="inputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.inputVariableMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getInputVariableMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Mapping of input variable names of remote agent to GECX variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#input_variable_mapping GoogleCesAgent#input_variable_mapping}

---

##### `outputVariableMapping`<sup>Optional</sup> <a name="outputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.outputVariableMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutputVariableMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Mapping of output variable names of remote agent to GECX variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#output_variable_mapping GoogleCesAgent#output_variable_mapping}

---

##### `streamingEnabled`<sup>Optional</sup> <a name="streamingEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.streamingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getStreamingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether streaming is enabled for the remote agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#streaming_enabled GoogleCesAgent#streaming_enabled}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard;

GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.builder()
    .description(java.lang.String)
    .name(java.lang.String)
    .skills(IResolvable|java.util.List<GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills>)
    .supportedInterfaces(IResolvable|java.util.List<GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces>)
    .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.description">description</a></code> | <code>java.lang.String</code> | A description of the agent's domain of action/solution space. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.name">name</a></code> | <code>java.lang.String</code> | A human-readable name for the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.skills">skills</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>></code> | skills block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.supportedInterfaces">supportedInterfaces</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>></code> | supported_interfaces block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.version">version</a></code> | <code>java.lang.String</code> | The version of the agent. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the agent's domain of action/solution space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A human-readable name for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#name GoogleCesAgent#name}

---

##### `skills`<sup>Required</sup> <a name="skills" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.skills"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills> getSkills();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>>

skills block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#skills GoogleCesAgent#skills}

---

##### `supportedInterfaces`<sup>Required</sup> <a name="supportedInterfaces" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.supportedInterfaces"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces> getSupportedInterfaces();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>>

supported_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#supported_interfaces GoogleCesAgent#supported_interfaces}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The version of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#version GoogleCesAgent#version}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills;

GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.builder()
    .description(java.lang.String)
    .id(java.lang.String)
    .name(java.lang.String)
    .tags(java.util.List<java.lang.String>)
//  .examples(java.util.List<java.lang.String>)
//  .inputModes(java.util.List<java.lang.String>)
//  .outputModes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.description">description</a></code> | <code>java.lang.String</code> | A detailed description of the skill. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.id">id</a></code> | <code>java.lang.String</code> | A unique identifier for the agent's skill. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.name">name</a></code> | <code>java.lang.String</code> | A human-readable name for the skill. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A set of keywords describing the skill's capabilities. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.examples">examples</a></code> | <code>java.util.List<java.lang.String></code> | Example prompts or scenarios that this skill can handle. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.inputModes">inputModes</a></code> | <code>java.util.List<java.lang.String></code> | The set of supported input media types for this skill, overriding the agent's defaults. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.outputModes">outputModes</a></code> | <code>java.util.List<java.lang.String></code> | The set of supported output media types for this skill, overriding the agent's defaults. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A detailed description of the skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

A unique identifier for the agent's skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#id GoogleCesAgent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A human-readable name for the skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#name GoogleCesAgent#name}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

A set of keywords describing the skill's capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#tags GoogleCesAgent#tags}

---

##### `examples`<sup>Optional</sup> <a name="examples" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.examples"></a>

```java
public java.util.List<java.lang.String> getExamples();
```

- *Type:* java.util.List<java.lang.String>

Example prompts or scenarios that this skill can handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#examples GoogleCesAgent#examples}

---

##### `inputModes`<sup>Optional</sup> <a name="inputModes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.inputModes"></a>

```java
public java.util.List<java.lang.String> getInputModes();
```

- *Type:* java.util.List<java.lang.String>

The set of supported input media types for this skill, overriding the agent's defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#input_modes GoogleCesAgent#input_modes}

---

##### `outputModes`<sup>Optional</sup> <a name="outputModes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.outputModes"></a>

```java
public java.util.List<java.lang.String> getOutputModes();
```

- *Type:* java.util.List<java.lang.String>

The set of supported output media types for this skill, overriding the agent's defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#output_modes GoogleCesAgent#output_modes}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces;

GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.builder()
    .protocolBinding(java.lang.String)
    .protocolVersion(java.lang.String)
    .url(java.lang.String)
//  .tenant(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolBinding">protocolBinding</a></code> | <code>java.lang.String</code> | The protocol binding supported at this URL. The core ones officially supported are JSONRPC, GRPC and HTTP+JSON. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolVersion">protocolVersion</a></code> | <code>java.lang.String</code> | The version of the A2A protocol this interface exposes. Examples: "0.3", "1.0". |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.url">url</a></code> | <code>java.lang.String</code> | The URL where this interface is available. Must be a valid absolute HTTPS URL in production. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.tenant">tenant</a></code> | <code>java.lang.String</code> | Tenant ID to be used in the request when calling the agent. |

---

##### `protocolBinding`<sup>Required</sup> <a name="protocolBinding" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolBinding"></a>

```java
public java.lang.String getProtocolBinding();
```

- *Type:* java.lang.String

The protocol binding supported at this URL. The core ones officially supported are JSONRPC, GRPC and HTTP+JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#protocol_binding GoogleCesAgent#protocol_binding}

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolVersion"></a>

```java
public java.lang.String getProtocolVersion();
```

- *Type:* java.lang.String

The version of the A2A protocol this interface exposes. Examples: "0.3", "1.0".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#protocol_version GoogleCesAgent#protocol_version}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The URL where this interface is available. Must be a valid absolute HTTPS URL in production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#url GoogleCesAgent#url}

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.tenant"></a>

```java
public java.lang.String getTenant();
```

- *Type:* java.lang.String

Tenant ID to be used in the request when calling the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#tenant GoogleCesAgent#tenant}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication;

GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.builder()
//  .apiKeyConfig(GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig)
//  .bearerTokenConfig(GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig)
//  .oauthConfig(GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig)
//  .serviceAccountAuthConfig(GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.serviceAccountAuthConfig">serviceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | service_account_auth_config block. |

---

##### `apiKeyConfig`<sup>Optional</sup> <a name="apiKeyConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.apiKeyConfig"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig getApiKeyConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#api_key_config GoogleCesAgent#api_key_config}

---

##### `bearerTokenConfig`<sup>Optional</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.bearerTokenConfig"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig getBearerTokenConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#bearer_token_config GoogleCesAgent#bearer_token_config}

---

##### `oauthConfig`<sup>Optional</sup> <a name="oauthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.oauthConfig"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig getOauthConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#oauth_config GoogleCesAgent#oauth_config}

---

##### `serviceAccountAuthConfig`<sup>Optional</sup> <a name="serviceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.serviceAccountAuthConfig"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig getServiceAccountAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#service_account_auth_config GoogleCesAgent#service_account_auth_config}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig;

GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.builder()
    .apiKeySecretVersion(java.lang.String)
    .keyName(java.lang.String)
    .requestLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.apiKeySecretVersion">apiKeySecretVersion</a></code> | <code>java.lang.String</code> | The name of the SecretManager secret version resource storing the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.keyName">keyName</a></code> | <code>java.lang.String</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.requestLocation">requestLocation</a></code> | <code>java.lang.String</code> | Key location in the request. Possible values: HEADER QUERY_STRING. |

---

##### `apiKeySecretVersion`<sup>Required</sup> <a name="apiKeySecretVersion" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.apiKeySecretVersion"></a>

```java
public java.lang.String getApiKeySecretVersion();
```

- *Type:* java.lang.String

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#api_key_secret_version GoogleCesAgent#api_key_secret_version}

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#key_name GoogleCesAgent#key_name}

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.requestLocation"></a>

```java
public java.lang.String getRequestLocation();
```

- *Type:* java.lang.String

Key location in the request. Possible values: HEADER QUERY_STRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#request_location GoogleCesAgent#request_location}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig;

GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.builder()
    .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>java.lang.String</code> | The bearer token. Must be in the format '$context.variables.<name_of_variable>'. |

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

The bearer token. Must be in the format '$context.variables.<name_of_variable>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#token GoogleCesAgent#token}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig;

GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.builder()
    .clientId(java.lang.String)
    .clientSecretVersion(java.lang.String)
    .oauthGrantType(java.lang.String)
    .tokenEndpoint(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientSecretVersion">clientSecretVersion</a></code> | <code>java.lang.String</code> | The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.oauthGrantType">oauthGrantType</a></code> | <code>java.lang.String</code> | OAuth grant types. Possible values: CLIENT_CREDENTIAL. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | The OAuth scopes to grant. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#client_id GoogleCesAgent#client_id}

---

##### `clientSecretVersion`<sup>Required</sup> <a name="clientSecretVersion" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientSecretVersion"></a>

```java
public java.lang.String getClientSecretVersion();
```

- *Type:* java.lang.String

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#client_secret_version GoogleCesAgent#client_secret_version}

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.oauthGrantType"></a>

```java
public java.lang.String getOauthGrantType();
```

- *Type:* java.lang.String

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#oauth_grant_type GoogleCesAgent#oauth_grant_type}

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#token_endpoint GoogleCesAgent#token_endpoint}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#scopes GoogleCesAgent#scopes}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig;

GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.builder()
    .serviceAccount(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The email address of the service account used for authenticatation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used. |

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

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

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#scopes GoogleCesAgent#scopes}

---

### GoogleCesAgentRemoteDialogflowAgent <a name="GoogleCesAgentRemoteDialogflowAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteDialogflowAgent;

GoogleCesAgentRemoteDialogflowAgent.builder()
    .agent(java.lang.String)
    .flowId(java.lang.String)
//  .environmentId(java.lang.String)
//  .inputVariableMapping(java.util.Map<java.lang.String, java.lang.String>)
//  .languageCodeVariable(java.lang.String)
//  .outputVariableMapping(java.util.Map<java.lang.String, java.lang.String>)
//  .respectResponseInterruptionSettings(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.agent">agent</a></code> | <code>java.lang.String</code> | The [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents agent resource name. Format: 'projects/{project}/locations/{location}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.flowId">flowId</a></code> | <code>java.lang.String</code> | The flow ID of the flow in the Dialogflow agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | The environment ID of the Dialogflow agent be used for the agent execution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.inputVariableMapping">inputVariableMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The mapping of the app variables names to the Dialogflow session parameters names to be sent to the Dialogflow agent as input. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.languageCodeVariable">languageCodeVariable</a></code> | <code>java.lang.String</code> | The name of the variable that contains the language code to be used for the Dialogflow session. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.outputVariableMapping">outputVariableMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The mapping of the Dialogflow session parameters names to the app variables names to be sent back to the CES agent after the Dialogflow agent execution ends. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.respectResponseInterruptionSettings">respectResponseInterruptionSettings</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent. |

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.agent"></a>

```java
public java.lang.String getAgent();
```

- *Type:* java.lang.String

The [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents agent resource name. Format: 'projects/{project}/locations/{location}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#agent GoogleCesAgent#agent}

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.flowId"></a>

```java
public java.lang.String getFlowId();
```

- *Type:* java.lang.String

The flow ID of the flow in the Dialogflow agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#flow_id GoogleCesAgent#flow_id}

---

##### `environmentId`<sup>Optional</sup> <a name="environmentId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

The environment ID of the Dialogflow agent be used for the agent execution.

If not specified, the draft environment will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#environment_id GoogleCesAgent#environment_id}

---

##### `inputVariableMapping`<sup>Optional</sup> <a name="inputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.inputVariableMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getInputVariableMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The mapping of the app variables names to the Dialogflow session parameters names to be sent to the Dialogflow agent as input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#input_variable_mapping GoogleCesAgent#input_variable_mapping}

---

##### `languageCodeVariable`<sup>Optional</sup> <a name="languageCodeVariable" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.languageCodeVariable"></a>

```java
public java.lang.String getLanguageCodeVariable();
```

- *Type:* java.lang.String

The name of the variable that contains the language code to be used for the Dialogflow session.

If unspecified, the default language code of the
Dialogflow agent will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#language_code_variable GoogleCesAgent#language_code_variable}

---

##### `outputVariableMapping`<sup>Optional</sup> <a name="outputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.outputVariableMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutputVariableMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The mapping of the Dialogflow session parameters names to the app variables names to be sent back to the CES agent after the Dialogflow agent execution ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#output_variable_mapping GoogleCesAgent#output_variable_mapping}

---

##### `respectResponseInterruptionSettings`<sup>Optional</sup> <a name="respectResponseInterruptionSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.respectResponseInterruptionSettings"></a>

```java
public java.lang.Boolean|IResolvable getRespectResponseInterruptionSettings();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent.

* If false: all response messages from the Dialogflow agent follow the app-level barge-in settings. * If true: only response messages with ['allow_playback_interruption'](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#text) set to true will be interruptable, all other messages follow the app-level barge-in settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#respect_response_interruption_settings GoogleCesAgent#respect_response_interruption_settings}

---

### GoogleCesAgentTimeouts <a name="GoogleCesAgentTimeouts" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentTimeouts;

GoogleCesAgentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#create GoogleCesAgent#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#delete GoogleCesAgent#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#update GoogleCesAgent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#create GoogleCesAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#delete GoogleCesAgent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#update GoogleCesAgent#update}.

---

### GoogleCesAgentToolsets <a name="GoogleCesAgentToolsets" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentToolsets;

GoogleCesAgentToolsets.builder()
    .toolset(java.lang.String)
//  .toolIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets.property.toolset">toolset</a></code> | <code>java.lang.String</code> | The resource name of the toolset. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets.property.toolIds">toolIds</a></code> | <code>java.util.List<java.lang.String></code> | The tools IDs to filter the toolset. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets.property.toolset"></a>

```java
public java.lang.String getToolset();
```

- *Type:* java.lang.String

The resource name of the toolset. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#toolset GoogleCesAgent#toolset}

---

##### `toolIds`<sup>Optional</sup> <a name="toolIds" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets.property.toolIds"></a>

```java
public java.util.List<java.lang.String> getToolIds();
```

- *Type:* java.util.List<java.lang.String>

The tools IDs to filter the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#tool_ids GoogleCesAgent#tool_ids}

---

### GoogleCesAgentTransferRules <a name="GoogleCesAgentTransferRules" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentTransferRules;

GoogleCesAgentTransferRules.builder()
    .childAgent(java.lang.String)
    .direction(java.lang.String)
//  .deterministicTransfer(GoogleCesAgentTransferRulesDeterministicTransfer)
//  .disablePlannerTransfer(GoogleCesAgentTransferRulesDisablePlannerTransfer)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.childAgent">childAgent</a></code> | <code>java.lang.String</code> | The resource name of the child agent the rule applies to. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.direction">direction</a></code> | <code>java.lang.String</code> | The direction of the transfer. Possible values: ["PARENT_TO_CHILD", "CHILD_TO_PARENT"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.deterministicTransfer">deterministicTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a></code> | deterministic_transfer block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.disablePlannerTransfer">disablePlannerTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a></code> | disable_planner_transfer block. |

---

##### `childAgent`<sup>Required</sup> <a name="childAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.childAgent"></a>

```java
public java.lang.String getChildAgent();
```

- *Type:* java.lang.String

The resource name of the child agent the rule applies to. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#child_agent GoogleCesAgent#child_agent}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

The direction of the transfer. Possible values: ["PARENT_TO_CHILD", "CHILD_TO_PARENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#direction GoogleCesAgent#direction}

---

##### `deterministicTransfer`<sup>Optional</sup> <a name="deterministicTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.deterministicTransfer"></a>

```java
public GoogleCesAgentTransferRulesDeterministicTransfer getDeterministicTransfer();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a>

deterministic_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#deterministic_transfer GoogleCesAgent#deterministic_transfer}

---

##### `disablePlannerTransfer`<sup>Optional</sup> <a name="disablePlannerTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.disablePlannerTransfer"></a>

```java
public GoogleCesAgentTransferRulesDisablePlannerTransfer getDisablePlannerTransfer();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a>

disable_planner_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disable_planner_transfer GoogleCesAgent#disable_planner_transfer}

---

### GoogleCesAgentTransferRulesDeterministicTransfer <a name="GoogleCesAgentTransferRulesDeterministicTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentTransferRulesDeterministicTransfer;

GoogleCesAgentTransferRulesDeterministicTransfer.builder()
//  .expressionCondition(GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition)
//  .pythonCodeCondition(GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer.property.expressionCondition">expressionCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | expression_condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer.property.pythonCodeCondition">pythonCodeCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | python_code_condition block. |

---

##### `expressionCondition`<sup>Optional</sup> <a name="expressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer.property.expressionCondition"></a>

```java
public GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition getExpressionCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a>

expression_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#expression_condition GoogleCesAgent#expression_condition}

---

##### `pythonCodeCondition`<sup>Optional</sup> <a name="pythonCodeCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer.property.pythonCodeCondition"></a>

```java
public GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition getPythonCodeCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

python_code_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code_condition GoogleCesAgent#python_code_condition}

---

### GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition <a name="GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition;

GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition.builder()
    .expression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | The string representation of cloud.api.Expression condition. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

The string representation of cloud.api.Expression condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#expression GoogleCesAgent#expression}

---

### GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition <a name="GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition;

GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition.builder()
    .pythonCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | The python code to execute. The function must be named 'should_trigger_transfer_callback'. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

The python code to execute. The function must be named 'should_trigger_transfer_callback'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

### GoogleCesAgentTransferRulesDisablePlannerTransfer <a name="GoogleCesAgentTransferRulesDisablePlannerTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentTransferRulesDisablePlannerTransfer;

GoogleCesAgentTransferRulesDisablePlannerTransfer.builder()
    .expressionCondition(GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer.property.expressionCondition">expressionCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | expression_condition block. |

---

##### `expressionCondition`<sup>Required</sup> <a name="expressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer.property.expressionCondition"></a>

```java
public GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition getExpressionCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

expression_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#expression_condition GoogleCesAgent#expression_condition}

---

### GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition <a name="GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition;

GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition.builder()
    .expression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | The string representation of cloud.api.Expression condition. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

The string representation of cloud.api.Expression condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#expression GoogleCesAgent#expression}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesAgentAfterAgentCallbacksList <a name="GoogleCesAgentAfterAgentCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentAfterAgentCallbacksList;

new GoogleCesAgentAfterAgentCallbacksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.get"></a>

```java
public GoogleCesAgentAfterAgentCallbacksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentAfterAgentCallbacks> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>>

---


### GoogleCesAgentAfterAgentCallbacksOutputReference <a name="GoogleCesAgentAfterAgentCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentAfterAgentCallbacksOutputReference;

new GoogleCesAgentAfterAgentCallbacksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```java
public void resetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.pythonCodeInput"></a>

```java
public java.lang.String getPythonCodeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCesAgentAfterAgentCallbacks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>

---


### GoogleCesAgentAfterModelCallbacksList <a name="GoogleCesAgentAfterModelCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentAfterModelCallbacksList;

new GoogleCesAgentAfterModelCallbacksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.get"></a>

```java
public GoogleCesAgentAfterModelCallbacksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentAfterModelCallbacks> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>>

---


### GoogleCesAgentAfterModelCallbacksOutputReference <a name="GoogleCesAgentAfterModelCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentAfterModelCallbacksOutputReference;

new GoogleCesAgentAfterModelCallbacksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```java
public void resetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.pythonCodeInput"></a>

```java
public java.lang.String getPythonCodeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCesAgentAfterModelCallbacks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>

---


### GoogleCesAgentAfterToolCallbacksList <a name="GoogleCesAgentAfterToolCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentAfterToolCallbacksList;

new GoogleCesAgentAfterToolCallbacksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.get"></a>

```java
public GoogleCesAgentAfterToolCallbacksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentAfterToolCallbacks> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>>

---


### GoogleCesAgentAfterToolCallbacksOutputReference <a name="GoogleCesAgentAfterToolCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentAfterToolCallbacksOutputReference;

new GoogleCesAgentAfterToolCallbacksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```java
public void resetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.pythonCodeInput"></a>

```java
public java.lang.String getPythonCodeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCesAgentAfterToolCallbacks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>

---


### GoogleCesAgentBeforeAgentCallbacksList <a name="GoogleCesAgentBeforeAgentCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentBeforeAgentCallbacksList;

new GoogleCesAgentBeforeAgentCallbacksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.get"></a>

```java
public GoogleCesAgentBeforeAgentCallbacksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentBeforeAgentCallbacks> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>>

---


### GoogleCesAgentBeforeAgentCallbacksOutputReference <a name="GoogleCesAgentBeforeAgentCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentBeforeAgentCallbacksOutputReference;

new GoogleCesAgentBeforeAgentCallbacksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```java
public void resetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.pythonCodeInput"></a>

```java
public java.lang.String getPythonCodeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCesAgentBeforeAgentCallbacks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>

---


### GoogleCesAgentBeforeModelCallbacksList <a name="GoogleCesAgentBeforeModelCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentBeforeModelCallbacksList;

new GoogleCesAgentBeforeModelCallbacksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.get"></a>

```java
public GoogleCesAgentBeforeModelCallbacksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentBeforeModelCallbacks> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>>

---


### GoogleCesAgentBeforeModelCallbacksOutputReference <a name="GoogleCesAgentBeforeModelCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentBeforeModelCallbacksOutputReference;

new GoogleCesAgentBeforeModelCallbacksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```java
public void resetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.pythonCodeInput"></a>

```java
public java.lang.String getPythonCodeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCesAgentBeforeModelCallbacks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>

---


### GoogleCesAgentBeforeToolCallbacksList <a name="GoogleCesAgentBeforeToolCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentBeforeToolCallbacksList;

new GoogleCesAgentBeforeToolCallbacksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.get"></a>

```java
public GoogleCesAgentBeforeToolCallbacksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentBeforeToolCallbacks> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>>

---


### GoogleCesAgentBeforeToolCallbacksOutputReference <a name="GoogleCesAgentBeforeToolCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentBeforeToolCallbacksOutputReference;

new GoogleCesAgentBeforeToolCallbacksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```java
public void resetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.pythonCodeInput"></a>

```java
public java.lang.String getPythonCodeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveExecutionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCesAgentBeforeToolCallbacks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>

---


### GoogleCesAgentLlmAgentOutputReference <a name="GoogleCesAgentLlmAgentOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentLlmAgentOutputReference;

new GoogleCesAgentLlmAgentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.internalValue"></a>

```java
public GoogleCesAgentLlmAgent getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a>

---


### GoogleCesAgentModelSettingsOutputReference <a name="GoogleCesAgentModelSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentModelSettingsOutputReference;

new GoogleCesAgentModelSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resetModel"></a>

```java
public void resetModel()
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resetTemperature"></a>

```java
public void resetTemperature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.modelInput"></a>

```java
public java.lang.String getModelInput();
```

- *Type:* java.lang.String

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.temperatureInput"></a>

```java
public java.lang.Number getTemperatureInput();
```

- *Type:* java.lang.Number

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.internalValue"></a>

```java
public GoogleCesAgentModelSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference;

new GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills">putSkills</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces">putSupportedInterfaces</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSkills` <a name="putSkills" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills"></a>

```java
public void putSkills(IResolvable|java.util.List<GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>>

---

##### `putSupportedInterfaces` <a name="putSupportedInterfaces" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces"></a>

```java
public void putSupportedInterfaces(IResolvable|java.util.List<GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skills">skills</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfaces">supportedInterfaces</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skillsInput">skillsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfacesInput">supportedInterfacesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `skills`<sup>Required</sup> <a name="skills" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skills"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList getSkills();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList</a>

---

##### `supportedInterfaces`<sup>Required</sup> <a name="supportedInterfaces" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfaces"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList getSupportedInterfaces();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `skillsInput`<sup>Optional</sup> <a name="skillsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skillsInput"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills> getSkillsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>>

---

##### `supportedInterfacesInput`<sup>Optional</sup> <a name="supportedInterfacesInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfacesInput"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces> getSupportedInterfacesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.internalValue"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList;

new GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference;

new GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetExamples">resetExamples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetInputModes">resetInputModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetOutputModes">resetOutputModes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExamples` <a name="resetExamples" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetExamples"></a>

```java
public void resetExamples()
```

##### `resetInputModes` <a name="resetInputModes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetInputModes"></a>

```java
public void resetInputModes()
```

##### `resetOutputModes` <a name="resetOutputModes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetOutputModes"></a>

```java
public void resetOutputModes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examplesInput">examplesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModesInput">inputModesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModesInput">outputModesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examples">examples</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModes">inputModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModes">outputModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `examplesInput`<sup>Optional</sup> <a name="examplesInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examplesInput"></a>

```java
public java.util.List<java.lang.String> getExamplesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputModesInput`<sup>Optional</sup> <a name="inputModesInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModesInput"></a>

```java
public java.util.List<java.lang.String> getInputModesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `outputModesInput`<sup>Optional</sup> <a name="outputModesInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModesInput"></a>

```java
public java.util.List<java.lang.String> getOutputModesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `examples`<sup>Required</sup> <a name="examples" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examples"></a>

```java
public java.util.List<java.lang.String> getExamples();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inputModes`<sup>Required</sup> <a name="inputModes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModes"></a>

```java
public java.util.List<java.lang.String> getInputModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `outputModes`<sup>Required</sup> <a name="outputModes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModes"></a>

```java
public java.util.List<java.lang.String> getOutputModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList;

new GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference;

new GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resetTenant">resetTenant</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTenant` <a name="resetTenant" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resetTenant"></a>

```java
public void resetTenant()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBindingInput">protocolBindingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersionInput">protocolVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenantInput">tenantInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBinding">protocolBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersion">protocolVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenant">tenant</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `protocolBindingInput`<sup>Optional</sup> <a name="protocolBindingInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBindingInput"></a>

```java
public java.lang.String getProtocolBindingInput();
```

- *Type:* java.lang.String

---

##### `protocolVersionInput`<sup>Optional</sup> <a name="protocolVersionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersionInput"></a>

```java
public java.lang.String getProtocolVersionInput();
```

- *Type:* java.lang.String

---

##### `tenantInput`<sup>Optional</sup> <a name="tenantInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenantInput"></a>

```java
public java.lang.String getTenantInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `protocolBinding`<sup>Required</sup> <a name="protocolBinding" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBinding"></a>

```java
public java.lang.String getProtocolBinding();
```

- *Type:* java.lang.String

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersion"></a>

```java
public java.lang.String getProtocolVersion();
```

- *Type:* java.lang.String

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenant"></a>

```java
public java.lang.String getTenant();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference;

new GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput">apiKeySecretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">requestLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion">apiKeySecretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocation">requestLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeySecretVersionInput`<sup>Optional</sup> <a name="apiKeySecretVersionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```java
public java.lang.String getApiKeySecretVersionInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `requestLocationInput`<sup>Optional</sup> <a name="requestLocationInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```java
public java.lang.String getRequestLocationInput();
```

- *Type:* java.lang.String

---

##### `apiKeySecretVersion`<sup>Required</sup> <a name="apiKeySecretVersion" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```java
public java.lang.String getApiKeySecretVersion();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```java
public java.lang.String getRequestLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference;

new GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference;

new GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resetScopes"></a>

```java
public void resetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput">clientSecretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauthGrantTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion">clientSecretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauthGrantType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretVersionInput`<sup>Optional</sup> <a name="clientSecretVersionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput"></a>

```java
public java.lang.String getClientSecretVersionInput();
```

- *Type:* java.lang.String

---

##### `oauthGrantTypeInput`<sup>Optional</sup> <a name="oauthGrantTypeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```java
public java.lang.String getOauthGrantTypeInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```java
public java.lang.String getTokenEndpointInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecretVersion`<sup>Required</sup> <a name="clientSecretVersion" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion"></a>

```java
public java.lang.String getClientSecretVersion();
```

- *Type:* java.lang.String

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```java
public java.lang.String getOauthGrantType();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference;

new GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig">putApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig">putBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig">putOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig">putServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetApiKeyConfig">resetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetBearerTokenConfig">resetBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetOauthConfig">resetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetServiceAccountAuthConfig">resetServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyConfig` <a name="putApiKeyConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig"></a>

```java
public void putApiKeyConfig(GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

---

##### `putBearerTokenConfig` <a name="putBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig"></a>

```java
public void putBearerTokenConfig(GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

---

##### `putOauthConfig` <a name="putOauthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig"></a>

```java
public void putOauthConfig(GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

---

##### `putServiceAccountAuthConfig` <a name="putServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig"></a>

```java
public void putServiceAccountAuthConfig(GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

---

##### `resetApiKeyConfig` <a name="resetApiKeyConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetApiKeyConfig"></a>

```java
public void resetApiKeyConfig()
```

##### `resetBearerTokenConfig` <a name="resetBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetBearerTokenConfig"></a>

```java
public void resetBearerTokenConfig()
```

##### `resetOauthConfig` <a name="resetOauthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetOauthConfig"></a>

```java
public void resetOauthConfig()
```

##### `resetServiceAccountAuthConfig` <a name="resetServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetServiceAccountAuthConfig"></a>

```java
public void resetServiceAccountAuthConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfig">serviceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfigInput">apiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfigInput">bearerTokenConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfigInput">oauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput">serviceAccountAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyConfig`<sup>Required</sup> <a name="apiKeyConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfig"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference getApiKeyConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearerTokenConfig`<sup>Required</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfig"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference getBearerTokenConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfig"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference getOauthConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference</a>

---

##### `serviceAccountAuthConfig`<sup>Required</sup> <a name="serviceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfig"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference getServiceAccountAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference</a>

---

##### `apiKeyConfigInput`<sup>Optional</sup> <a name="apiKeyConfigInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig getApiKeyConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

---

##### `bearerTokenConfigInput`<sup>Optional</sup> <a name="bearerTokenConfigInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig getBearerTokenConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

---

##### `oauthConfigInput`<sup>Optional</sup> <a name="oauthConfigInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfigInput"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig getOauthConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

---

##### `serviceAccountAuthConfigInput`<sup>Optional</sup> <a name="serviceAccountAuthConfigInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig getServiceAccountAuthConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.internalValue"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference;

new GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes"></a>

```java
public void resetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference;

new GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard">putAgentCard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication">putApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentCard">resetAgentCard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentRegistry">resetAgentRegistry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetApiAuthentication">resetApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetContextId">resetContextId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetInputVariableMapping">resetInputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetOutputVariableMapping">resetOutputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetStreamingEnabled">resetStreamingEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentCard` <a name="putAgentCard" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard"></a>

```java
public void putAgentCard(GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a>

---

##### `putApiAuthentication` <a name="putApiAuthentication" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication"></a>

```java
public void putApiAuthentication(GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

---

##### `resetAgentCard` <a name="resetAgentCard" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentCard"></a>

```java
public void resetAgentCard()
```

##### `resetAgentRegistry` <a name="resetAgentRegistry" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentRegistry"></a>

```java
public void resetAgentRegistry()
```

##### `resetApiAuthentication` <a name="resetApiAuthentication" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetApiAuthentication"></a>

```java
public void resetApiAuthentication()
```

##### `resetContextId` <a name="resetContextId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetContextId"></a>

```java
public void resetContextId()
```

##### `resetInputVariableMapping` <a name="resetInputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetInputVariableMapping"></a>

```java
public void resetInputVariableMapping()
```

##### `resetOutputVariableMapping` <a name="resetOutputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetOutputVariableMapping"></a>

```java
public void resetOutputVariableMapping()
```

##### `resetStreamingEnabled` <a name="resetStreamingEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetStreamingEnabled"></a>

```java
public void resetStreamingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCard">agentCard</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthentication">apiAuthentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCardInput">agentCardInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistryInput">agentRegistryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthenticationInput">apiAuthenticationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextIdInput">contextIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMappingInput">inputVariableMappingInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMappingInput">outputVariableMappingInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabledInput">streamingEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistry">agentRegistry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextId">contextId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMapping">inputVariableMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMapping">outputVariableMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabled">streamingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentCard`<sup>Required</sup> <a name="agentCard" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCard"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference getAgentCard();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference</a>

---

##### `apiAuthentication`<sup>Required</sup> <a name="apiAuthentication" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthentication"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference getApiAuthentication();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference</a>

---

##### `agentCardInput`<sup>Optional</sup> <a name="agentCardInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCardInput"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard getAgentCardInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a>

---

##### `agentRegistryInput`<sup>Optional</sup> <a name="agentRegistryInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistryInput"></a>

```java
public java.lang.String getAgentRegistryInput();
```

- *Type:* java.lang.String

---

##### `apiAuthenticationInput`<sup>Optional</sup> <a name="apiAuthenticationInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthenticationInput"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication getApiAuthenticationInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

---

##### `contextIdInput`<sup>Optional</sup> <a name="contextIdInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextIdInput"></a>

```java
public java.lang.String getContextIdInput();
```

- *Type:* java.lang.String

---

##### `inputVariableMappingInput`<sup>Optional</sup> <a name="inputVariableMappingInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMappingInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getInputVariableMappingInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `outputVariableMappingInput`<sup>Optional</sup> <a name="outputVariableMappingInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMappingInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutputVariableMappingInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `streamingEnabledInput`<sup>Optional</sup> <a name="streamingEnabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getStreamingEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `agentRegistry`<sup>Required</sup> <a name="agentRegistry" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistry"></a>

```java
public java.lang.String getAgentRegistry();
```

- *Type:* java.lang.String

---

##### `contextId`<sup>Required</sup> <a name="contextId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextId"></a>

```java
public java.lang.String getContextId();
```

- *Type:* java.lang.String

---

##### `inputVariableMapping`<sup>Required</sup> <a name="inputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getInputVariableMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `outputVariableMapping`<sup>Required</sup> <a name="outputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutputVariableMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `streamingEnabled`<sup>Required</sup> <a name="streamingEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getStreamingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.internalValue"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a>

---


### GoogleCesAgentRemoteA2AAgentOutputReference <a name="GoogleCesAgentRemoteA2AAgentOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteA2AAgentOutputReference;

new GoogleCesAgentRemoteA2AAgentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.putA2AConfig">putA2AConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putA2AConfig` <a name="putA2AConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.putA2AConfig"></a>

```java
public void putA2AConfig(GoogleCesAgentRemoteA2AAgentA2AConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.putA2AConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.a2AConfig">a2AConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.a2AConfigInput">a2AConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `a2AConfig`<sup>Required</sup> <a name="a2AConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.a2AConfig"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference getA2AConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference</a>

---

##### `a2AConfigInput`<sup>Optional</sup> <a name="a2AConfigInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.a2AConfigInput"></a>

```java
public GoogleCesAgentRemoteA2AAgentA2AConfig getA2AConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.internalValue"></a>

```java
public GoogleCesAgentRemoteA2AAgent getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a>

---


### GoogleCesAgentRemoteDialogflowAgentOutputReference <a name="GoogleCesAgentRemoteDialogflowAgentOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentRemoteDialogflowAgentOutputReference;

new GoogleCesAgentRemoteDialogflowAgentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetEnvironmentId">resetEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetInputVariableMapping">resetInputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetLanguageCodeVariable">resetLanguageCodeVariable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetOutputVariableMapping">resetOutputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetRespectResponseInterruptionSettings">resetRespectResponseInterruptionSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnvironmentId` <a name="resetEnvironmentId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetEnvironmentId"></a>

```java
public void resetEnvironmentId()
```

##### `resetInputVariableMapping` <a name="resetInputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetInputVariableMapping"></a>

```java
public void resetInputVariableMapping()
```

##### `resetLanguageCodeVariable` <a name="resetLanguageCodeVariable" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetLanguageCodeVariable"></a>

```java
public void resetLanguageCodeVariable()
```

##### `resetOutputVariableMapping` <a name="resetOutputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetOutputVariableMapping"></a>

```java
public void resetOutputVariableMapping()
```

##### `resetRespectResponseInterruptionSettings` <a name="resetRespectResponseInterruptionSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetRespectResponseInterruptionSettings"></a>

```java
public void resetRespectResponseInterruptionSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.agentInput">agentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.environmentIdInput">environmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.flowIdInput">flowIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMappingInput">inputVariableMappingInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariableInput">languageCodeVariableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMappingInput">outputVariableMappingInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettingsInput">respectResponseInterruptionSettingsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.agent">agent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.flowId">flowId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMapping">inputVariableMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariable">languageCodeVariable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMapping">outputVariableMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettings">respectResponseInterruptionSettings</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentInput`<sup>Optional</sup> <a name="agentInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.agentInput"></a>

```java
public java.lang.String getAgentInput();
```

- *Type:* java.lang.String

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.environmentIdInput"></a>

```java
public java.lang.String getEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `flowIdInput`<sup>Optional</sup> <a name="flowIdInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.flowIdInput"></a>

```java
public java.lang.String getFlowIdInput();
```

- *Type:* java.lang.String

---

##### `inputVariableMappingInput`<sup>Optional</sup> <a name="inputVariableMappingInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMappingInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getInputVariableMappingInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `languageCodeVariableInput`<sup>Optional</sup> <a name="languageCodeVariableInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariableInput"></a>

```java
public java.lang.String getLanguageCodeVariableInput();
```

- *Type:* java.lang.String

---

##### `outputVariableMappingInput`<sup>Optional</sup> <a name="outputVariableMappingInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMappingInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutputVariableMappingInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `respectResponseInterruptionSettingsInput`<sup>Optional</sup> <a name="respectResponseInterruptionSettingsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettingsInput"></a>

```java
public java.lang.Boolean|IResolvable getRespectResponseInterruptionSettingsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.agent"></a>

```java
public java.lang.String getAgent();
```

- *Type:* java.lang.String

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.flowId"></a>

```java
public java.lang.String getFlowId();
```

- *Type:* java.lang.String

---

##### `inputVariableMapping`<sup>Required</sup> <a name="inputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getInputVariableMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `languageCodeVariable`<sup>Required</sup> <a name="languageCodeVariable" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariable"></a>

```java
public java.lang.String getLanguageCodeVariable();
```

- *Type:* java.lang.String

---

##### `outputVariableMapping`<sup>Required</sup> <a name="outputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOutputVariableMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `respectResponseInterruptionSettings`<sup>Required</sup> <a name="respectResponseInterruptionSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettings"></a>

```java
public java.lang.Boolean|IResolvable getRespectResponseInterruptionSettings();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.internalValue"></a>

```java
public GoogleCesAgentRemoteDialogflowAgent getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a>

---


### GoogleCesAgentTimeoutsOutputReference <a name="GoogleCesAgentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentTimeoutsOutputReference;

new GoogleCesAgentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCesAgentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a>

---


### GoogleCesAgentToolsetsList <a name="GoogleCesAgentToolsetsList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentToolsetsList;

new GoogleCesAgentToolsetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.get"></a>

```java
public GoogleCesAgentToolsetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentToolsets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>>

---


### GoogleCesAgentToolsetsOutputReference <a name="GoogleCesAgentToolsetsOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentToolsetsOutputReference;

new GoogleCesAgentToolsetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.resetToolIds">resetToolIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToolIds` <a name="resetToolIds" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.resetToolIds"></a>

```java
public void resetToolIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolIdsInput">toolIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolsetInput">toolsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolIds">toolIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolset">toolset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `toolIdsInput`<sup>Optional</sup> <a name="toolIdsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolIdsInput"></a>

```java
public java.util.List<java.lang.String> getToolIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `toolsetInput`<sup>Optional</sup> <a name="toolsetInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolsetInput"></a>

```java
public java.lang.String getToolsetInput();
```

- *Type:* java.lang.String

---

##### `toolIds`<sup>Required</sup> <a name="toolIds" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolIds"></a>

```java
public java.util.List<java.lang.String> getToolIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolset"></a>

```java
public java.lang.String getToolset();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCesAgentToolsets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>

---


### GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference <a name="GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference;

new GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.internalValue"></a>

```java
public GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a>

---


### GoogleCesAgentTransferRulesDeterministicTransferOutputReference <a name="GoogleCesAgentTransferRulesDeterministicTransferOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference;

new GoogleCesAgentTransferRulesDeterministicTransferOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition">putExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition">putPythonCodeCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resetExpressionCondition">resetExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resetPythonCodeCondition">resetPythonCodeCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpressionCondition` <a name="putExpressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition"></a>

```java
public void putExpressionCondition(GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a>

---

##### `putPythonCodeCondition` <a name="putPythonCodeCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition"></a>

```java
public void putPythonCodeCondition(GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

---

##### `resetExpressionCondition` <a name="resetExpressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resetExpressionCondition"></a>

```java
public void resetExpressionCondition()
```

##### `resetPythonCodeCondition` <a name="resetPythonCodeCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resetPythonCodeCondition"></a>

```java
public void resetPythonCodeCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.expressionCondition">expressionCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference">GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeCondition">pythonCodeCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.expressionConditionInput">expressionConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeConditionInput">pythonCodeConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionCondition`<sup>Required</sup> <a name="expressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.expressionCondition"></a>

```java
public GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference getExpressionCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference">GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference</a>

---

##### `pythonCodeCondition`<sup>Required</sup> <a name="pythonCodeCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeCondition"></a>

```java
public GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference getPythonCodeCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference</a>

---

##### `expressionConditionInput`<sup>Optional</sup> <a name="expressionConditionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.expressionConditionInput"></a>

```java
public GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition getExpressionConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a>

---

##### `pythonCodeConditionInput`<sup>Optional</sup> <a name="pythonCodeConditionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeConditionInput"></a>

```java
public GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition getPythonCodeConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.internalValue"></a>

```java
public GoogleCesAgentTransferRulesDeterministicTransfer getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a>

---


### GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference <a name="GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference;

new GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCodeInput"></a>

```java
public java.lang.String getPythonCodeInput();
```

- *Type:* java.lang.String

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.internalValue"></a>

```java
public GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

---


### GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference <a name="GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference;

new GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.internalValue"></a>

```java
public GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

---


### GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference <a name="GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference;

new GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition">putExpressionCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpressionCondition` <a name="putExpressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition"></a>

```java
public void putExpressionCondition(GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionCondition">expressionCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionConditionInput">expressionConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionCondition`<sup>Required</sup> <a name="expressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionCondition"></a>

```java
public GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference getExpressionCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference</a>

---

##### `expressionConditionInput`<sup>Optional</sup> <a name="expressionConditionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionConditionInput"></a>

```java
public GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition getExpressionConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.internalValue"></a>

```java
public GoogleCesAgentTransferRulesDisablePlannerTransfer getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a>

---


### GoogleCesAgentTransferRulesList <a name="GoogleCesAgentTransferRulesList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentTransferRulesList;

new GoogleCesAgentTransferRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.get"></a>

```java
public GoogleCesAgentTransferRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCesAgentTransferRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>>

---


### GoogleCesAgentTransferRulesOutputReference <a name="GoogleCesAgentTransferRulesOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_agent.GoogleCesAgentTransferRulesOutputReference;

new GoogleCesAgentTransferRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDeterministicTransfer">putDeterministicTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDisablePlannerTransfer">putDisablePlannerTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resetDeterministicTransfer">resetDeterministicTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resetDisablePlannerTransfer">resetDisablePlannerTransfer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeterministicTransfer` <a name="putDeterministicTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDeterministicTransfer"></a>

```java
public void putDeterministicTransfer(GoogleCesAgentTransferRulesDeterministicTransfer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDeterministicTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a>

---

##### `putDisablePlannerTransfer` <a name="putDisablePlannerTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDisablePlannerTransfer"></a>

```java
public void putDisablePlannerTransfer(GoogleCesAgentTransferRulesDisablePlannerTransfer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDisablePlannerTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a>

---

##### `resetDeterministicTransfer` <a name="resetDeterministicTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resetDeterministicTransfer"></a>

```java
public void resetDeterministicTransfer()
```

##### `resetDisablePlannerTransfer` <a name="resetDisablePlannerTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resetDisablePlannerTransfer"></a>

```java
public void resetDisablePlannerTransfer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.deterministicTransfer">deterministicTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference">GoogleCesAgentTransferRulesDeterministicTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.disablePlannerTransfer">disablePlannerTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference">GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.childAgentInput">childAgentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.deterministicTransferInput">deterministicTransferInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.disablePlannerTransferInput">disablePlannerTransferInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.childAgent">childAgent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deterministicTransfer`<sup>Required</sup> <a name="deterministicTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.deterministicTransfer"></a>

```java
public GoogleCesAgentTransferRulesDeterministicTransferOutputReference getDeterministicTransfer();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference">GoogleCesAgentTransferRulesDeterministicTransferOutputReference</a>

---

##### `disablePlannerTransfer`<sup>Required</sup> <a name="disablePlannerTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.disablePlannerTransfer"></a>

```java
public GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference getDisablePlannerTransfer();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference">GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference</a>

---

##### `childAgentInput`<sup>Optional</sup> <a name="childAgentInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.childAgentInput"></a>

```java
public java.lang.String getChildAgentInput();
```

- *Type:* java.lang.String

---

##### `deterministicTransferInput`<sup>Optional</sup> <a name="deterministicTransferInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.deterministicTransferInput"></a>

```java
public GoogleCesAgentTransferRulesDeterministicTransfer getDeterministicTransferInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `disablePlannerTransferInput`<sup>Optional</sup> <a name="disablePlannerTransferInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.disablePlannerTransferInput"></a>

```java
public GoogleCesAgentTransferRulesDisablePlannerTransfer getDisablePlannerTransferInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a>

---

##### `childAgent`<sup>Required</sup> <a name="childAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.childAgent"></a>

```java
public java.lang.String getChildAgent();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCesAgentTransferRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>

---



