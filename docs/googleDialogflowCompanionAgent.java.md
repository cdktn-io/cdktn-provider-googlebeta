# `googleDialogflowCompanionAgent` Submodule <a name="`googleDialogflowCompanionAgent` Submodule" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCompanionAgent <a name="GoogleDialogflowCompanionAgent" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent google_dialogflow_companion_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgent;

GoogleDialogflowCompanionAgent.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .companionAgentId(java.lang.String)
    .location(java.lang.String)
//  .cesToolSpecs(IResolvable|java.util.List<GoogleDialogflowCompanionAgentCesToolSpecs>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .skillConfigs(IResolvable|java.util.List<GoogleDialogflowCompanionAgentSkillConfigs>)
//  .timeouts(GoogleDialogflowCompanionAgentTimeouts)
//  .toolsetTools(IResolvable|java.util.List<GoogleDialogflowCompanionAgentToolsetTools>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.companionAgentId">companionAgentId</a></code> | <code>java.lang.String</code> | The ID to use for the companion agent, which will become the final component of the companion agent's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the companion agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.cesToolSpecs">cesToolSpecs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>></code> | ces_tool_specs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description for the companion agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name for the companion agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#id GoogleDialogflowCompanionAgent#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#project GoogleDialogflowCompanionAgent#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.skillConfigs">skillConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>></code> | skill_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.toolsetTools">toolsetTools</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>></code> | toolset_tools block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `companionAgentId`<sup>Required</sup> <a name="companionAgentId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.companionAgentId"></a>

- *Type:* java.lang.String

The ID to use for the companion agent, which will become the final component of the companion agent's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#companion_agent_id GoogleDialogflowCompanionAgent#companion_agent_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#location GoogleDialogflowCompanionAgent#location}

---

##### `cesToolSpecs`<sup>Optional</sup> <a name="cesToolSpecs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.cesToolSpecs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>>

ces_tool_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#ces_tool_specs GoogleDialogflowCompanionAgent#ces_tool_specs}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

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

- *Type:* java.lang.String

Description for the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#description GoogleDialogflowCompanionAgent#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display name for the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#display_name GoogleDialogflowCompanionAgent#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#id GoogleDialogflowCompanionAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#project GoogleDialogflowCompanionAgent#project}.

---

##### `skillConfigs`<sup>Optional</sup> <a name="skillConfigs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.skillConfigs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>>

skill_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#skill_configs GoogleDialogflowCompanionAgent#skill_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#timeouts GoogleDialogflowCompanionAgent#timeouts}

---

##### `toolsetTools`<sup>Optional</sup> <a name="toolsetTools" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.toolsetTools"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>>

toolset_tools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#toolset_tools GoogleDialogflowCompanionAgent#toolset_tools}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putCesToolSpecs">putCesToolSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putSkillConfigs">putSkillConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putToolsetTools">putToolsetTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetCesToolSpecs">resetCesToolSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetSkillConfigs">resetSkillConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetToolsetTools">resetToolsetTools</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCesToolSpecs` <a name="putCesToolSpecs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putCesToolSpecs"></a>

```java
public void putCesToolSpecs(IResolvable|java.util.List<GoogleDialogflowCompanionAgentCesToolSpecs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putCesToolSpecs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>>

---

##### `putSkillConfigs` <a name="putSkillConfigs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putSkillConfigs"></a>

```java
public void putSkillConfigs(IResolvable|java.util.List<GoogleDialogflowCompanionAgentSkillConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putSkillConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putTimeouts"></a>

```java
public void putTimeouts(GoogleDialogflowCompanionAgentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a>

---

##### `putToolsetTools` <a name="putToolsetTools" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putToolsetTools"></a>

```java
public void putToolsetTools(IResolvable|java.util.List<GoogleDialogflowCompanionAgentToolsetTools> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putToolsetTools.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>>

---

##### `resetCesToolSpecs` <a name="resetCesToolSpecs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetCesToolSpecs"></a>

```java
public void resetCesToolSpecs()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetProject"></a>

```java
public void resetProject()
```

##### `resetSkillConfigs` <a name="resetSkillConfigs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetSkillConfigs"></a>

```java
public void resetSkillConfigs()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetToolsetTools` <a name="resetToolsetTools" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetToolsetTools"></a>

```java
public void resetToolsetTools()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDialogflowCompanionAgent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgent;

GoogleDialogflowCompanionAgent.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgent;

GoogleDialogflowCompanionAgent.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgent;

GoogleDialogflowCompanionAgent.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgent;

GoogleDialogflowCompanionAgent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDialogflowCompanionAgent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDialogflowCompanionAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDialogflowCompanionAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDialogflowCompanionAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCompanionAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cesToolSpecs">cesToolSpecs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList">GoogleDialogflowCompanionAgentCesToolSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.skillConfigs">skillConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList">GoogleDialogflowCompanionAgentSkillConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference">GoogleDialogflowCompanionAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.toolsetTools">toolsetTools</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList">GoogleDialogflowCompanionAgentToolsetToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cesToolSpecsInput">cesToolSpecsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.companionAgentIdInput">companionAgentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.skillConfigsInput">skillConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.toolsetToolsInput">toolsetToolsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.companionAgentId">companionAgentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cesToolSpecs`<sup>Required</sup> <a name="cesToolSpecs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cesToolSpecs"></a>

```java
public GoogleDialogflowCompanionAgentCesToolSpecsList getCesToolSpecs();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList">GoogleDialogflowCompanionAgentCesToolSpecsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `skillConfigs`<sup>Required</sup> <a name="skillConfigs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.skillConfigs"></a>

```java
public GoogleDialogflowCompanionAgentSkillConfigsList getSkillConfigs();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList">GoogleDialogflowCompanionAgentSkillConfigsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.timeouts"></a>

```java
public GoogleDialogflowCompanionAgentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference">GoogleDialogflowCompanionAgentTimeoutsOutputReference</a>

---

##### `toolsetTools`<sup>Required</sup> <a name="toolsetTools" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.toolsetTools"></a>

```java
public GoogleDialogflowCompanionAgentToolsetToolsList getToolsetTools();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList">GoogleDialogflowCompanionAgentToolsetToolsList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `cesToolSpecsInput`<sup>Optional</sup> <a name="cesToolSpecsInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cesToolSpecsInput"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCompanionAgentCesToolSpecs> getCesToolSpecsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>>

---

##### `companionAgentIdInput`<sup>Optional</sup> <a name="companionAgentIdInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.companionAgentIdInput"></a>

```java
public java.lang.String getCompanionAgentIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `skillConfigsInput`<sup>Optional</sup> <a name="skillConfigsInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.skillConfigsInput"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCompanionAgentSkillConfigs> getSkillConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDialogflowCompanionAgentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a>

---

##### `toolsetToolsInput`<sup>Optional</sup> <a name="toolsetToolsInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.toolsetToolsInput"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCompanionAgentToolsetTools> getToolsetToolsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>>

---

##### `companionAgentId`<sup>Required</sup> <a name="companionAgentId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.companionAgentId"></a>

```java
public java.lang.String getCompanionAgentId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCompanionAgentCesToolSpecs <a name="GoogleDialogflowCompanionAgentCesToolSpecs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentCesToolSpecs;

GoogleDialogflowCompanionAgentCesToolSpecs.builder()
//  .cesTool(java.lang.String)
//  .confirmationRequirement(java.lang.String)
//  .parameterOverrides(IResolvable|java.util.List<GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides>)
//  .proactiveEnabled(java.lang.Boolean|IResolvable)
//  .reactiveEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.cesTool">cesTool</a></code> | <code>java.lang.String</code> | The resource name of the CES tool. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.confirmationRequirement">confirmationRequirement</a></code> | <code>java.lang.String</code> | Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.parameterOverrides">parameterOverrides</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>></code> | parameter_overrides block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.proactiveEnabled">proactiveEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the tool is enabled in proactive mode. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.reactiveEnabled">reactiveEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the tool is enabled in reactive mode. |

---

##### `cesTool`<sup>Optional</sup> <a name="cesTool" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.cesTool"></a>

```java
public java.lang.String getCesTool();
```

- *Type:* java.lang.String

The resource name of the CES tool. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#ces_tool GoogleDialogflowCompanionAgent#ces_tool}

---

##### `confirmationRequirement`<sup>Optional</sup> <a name="confirmationRequirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.confirmationRequirement"></a>

```java
public java.lang.String getConfirmationRequirement();
```

- *Type:* java.lang.String

Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#confirmation_requirement GoogleDialogflowCompanionAgent#confirmation_requirement}

---

##### `parameterOverrides`<sup>Optional</sup> <a name="parameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.parameterOverrides"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides> getParameterOverrides();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>>

parameter_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#parameter_overrides GoogleDialogflowCompanionAgent#parameter_overrides}

---

##### `proactiveEnabled`<sup>Optional</sup> <a name="proactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.proactiveEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the tool is enabled in proactive mode.

All tools are enabled in proactive mode by default. To disable a tool in proactive mode, set this field to 'false'.
NOTE: At least one of 'proactive_enabled' or 'reactive_enabled' should be 'true' else the tool will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#proactive_enabled GoogleDialogflowCompanionAgent#proactive_enabled}

---

##### `reactiveEnabled`<sup>Optional</sup> <a name="reactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.reactiveEnabled"></a>

```java
public java.lang.Boolean|IResolvable getReactiveEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the tool is enabled in reactive mode.

All tools are disabled in reactive mode by default. To enable a tool in reactive mode, set this field to 'true'.
NOTE: At least one of 'reactive_enabled' or 'proactive_enabled' should be 'true' else the tool will be ignored. CompanionAgent config will throw an error if any unsupported tool is enabled in reactive mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#reactive_enabled GoogleDialogflowCompanionAgent#reactive_enabled}

---

### GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides <a name="GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides;

GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.builder()
    .contextReferenceKey(java.lang.String)
    .parameterName(java.lang.String)
//  .fieldPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.contextReferenceKey">contextReferenceKey</a></code> | <code>java.lang.String</code> | The key of the context reference in ingested context references. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.parameterName">parameterName</a></code> | <code>java.lang.String</code> | The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.fieldPath">fieldPath</a></code> | <code>java.lang.String</code> | The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it). |

---

##### `contextReferenceKey`<sup>Required</sup> <a name="contextReferenceKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.contextReferenceKey"></a>

```java
public java.lang.String getContextReferenceKey();
```

- *Type:* java.lang.String

The key of the context reference in ingested context references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#context_reference_key GoogleDialogflowCompanionAgent#context_reference_key}

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.parameterName"></a>

```java
public java.lang.String getParameterName();
```

- *Type:* java.lang.String

The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#parameter_name GoogleDialogflowCompanionAgent#parameter_name}

---

##### `fieldPath`<sup>Optional</sup> <a name="fieldPath" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.fieldPath"></a>

```java
public java.lang.String getFieldPath();
```

- *Type:* java.lang.String

The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#field_path GoogleDialogflowCompanionAgent#field_path}

---

### GoogleDialogflowCompanionAgentConfig <a name="GoogleDialogflowCompanionAgentConfig" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentConfig;

GoogleDialogflowCompanionAgentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .companionAgentId(java.lang.String)
    .location(java.lang.String)
//  .cesToolSpecs(IResolvable|java.util.List<GoogleDialogflowCompanionAgentCesToolSpecs>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .skillConfigs(IResolvable|java.util.List<GoogleDialogflowCompanionAgentSkillConfigs>)
//  .timeouts(GoogleDialogflowCompanionAgentTimeouts)
//  .toolsetTools(IResolvable|java.util.List<GoogleDialogflowCompanionAgentToolsetTools>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.companionAgentId">companionAgentId</a></code> | <code>java.lang.String</code> | The ID to use for the companion agent, which will become the final component of the companion agent's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the companion agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.cesToolSpecs">cesToolSpecs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>></code> | ces_tool_specs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description for the companion agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name for the companion agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#id GoogleDialogflowCompanionAgent#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#project GoogleDialogflowCompanionAgent#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.skillConfigs">skillConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>></code> | skill_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.toolsetTools">toolsetTools</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>></code> | toolset_tools block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `companionAgentId`<sup>Required</sup> <a name="companionAgentId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.companionAgentId"></a>

```java
public java.lang.String getCompanionAgentId();
```

- *Type:* java.lang.String

The ID to use for the companion agent, which will become the final component of the companion agent's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#companion_agent_id GoogleDialogflowCompanionAgent#companion_agent_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#location GoogleDialogflowCompanionAgent#location}

---

##### `cesToolSpecs`<sup>Optional</sup> <a name="cesToolSpecs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.cesToolSpecs"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCompanionAgentCesToolSpecs> getCesToolSpecs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>>

ces_tool_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#ces_tool_specs GoogleDialogflowCompanionAgent#ces_tool_specs}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#deletion_policy GoogleDialogflowCompanionAgent#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description for the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#description GoogleDialogflowCompanionAgent#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name for the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#display_name GoogleDialogflowCompanionAgent#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#id GoogleDialogflowCompanionAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#project GoogleDialogflowCompanionAgent#project}.

---

##### `skillConfigs`<sup>Optional</sup> <a name="skillConfigs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.skillConfigs"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCompanionAgentSkillConfigs> getSkillConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>>

skill_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#skill_configs GoogleDialogflowCompanionAgent#skill_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.timeouts"></a>

```java
public GoogleDialogflowCompanionAgentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#timeouts GoogleDialogflowCompanionAgent#timeouts}

---

##### `toolsetTools`<sup>Optional</sup> <a name="toolsetTools" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.toolsetTools"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCompanionAgentToolsetTools> getToolsetTools();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>>

toolset_tools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#toolset_tools GoogleDialogflowCompanionAgent#toolset_tools}

---

### GoogleDialogflowCompanionAgentSkillConfigs <a name="GoogleDialogflowCompanionAgentSkillConfigs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentSkillConfigs;

GoogleDialogflowCompanionAgentSkillConfigs.builder()
//  .guidanceSkillConfig(GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig)
//  .skillTriggeringEvent(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs.property.guidanceSkillConfig">guidanceSkillConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a></code> | guidance_skill_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs.property.skillTriggeringEvent">skillTriggeringEvent</a></code> | <code>java.lang.String</code> | The event that should trigger the skill. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]. |

---

##### `guidanceSkillConfig`<sup>Optional</sup> <a name="guidanceSkillConfig" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs.property.guidanceSkillConfig"></a>

```java
public GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig getGuidanceSkillConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

guidance_skill_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#guidance_skill_config GoogleDialogflowCompanionAgent#guidance_skill_config}

---

##### `skillTriggeringEvent`<sup>Optional</sup> <a name="skillTriggeringEvent" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs.property.skillTriggeringEvent"></a>

```java
public java.lang.String getSkillTriggeringEvent();
```

- *Type:* java.lang.String

The event that should trigger the skill. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#skill_triggering_event GoogleDialogflowCompanionAgent#skill_triggering_event}

---

### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig;

GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.builder()
//  .guidanceInstructions(IResolvable|java.util.List<GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions>)
//  .overarchingGuidance(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.guidanceInstructions">guidanceInstructions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>></code> | guidance_instructions block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.overarchingGuidance">overarchingGuidance</a></code> | <code>java.lang.String</code> | This is specific additional guidance that can be configured by the user. |

---

##### `guidanceInstructions`<sup>Optional</sup> <a name="guidanceInstructions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.guidanceInstructions"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions> getGuidanceInstructions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>>

guidance_instructions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#guidance_instructions GoogleDialogflowCompanionAgent#guidance_instructions}

---

##### `overarchingGuidance`<sup>Optional</sup> <a name="overarchingGuidance" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.overarchingGuidance"></a>

```java
public java.lang.String getOverarchingGuidance();
```

- *Type:* java.lang.String

This is specific additional guidance that can be configured by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#overarching_guidance GoogleDialogflowCompanionAgent#overarching_guidance}

---

### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions;

GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.builder()
//  .actions(IResolvable|java.util.List<GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions>)
//  .condition(java.lang.String)
//  .disableSuggestedReply(java.lang.Boolean|IResolvable)
//  .displayDetails(java.lang.String)
//  .displayName(java.lang.String)
//  .triggerEvent(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.actions">actions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>></code> | actions block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.condition">condition</a></code> | <code>java.lang.String</code> | The condition of the instruction. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.disableSuggestedReply">disableSuggestedReply</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable suggested reply generation for this instruction. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayDetails">displayDetails</a></code> | <code>java.lang.String</code> | The detailed description of this instruction. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name for the instruction. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.triggerEvent">triggerEvent</a></code> | <code>java.lang.String</code> | Event that triggers the guidance instruction. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.actions"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions> getActions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#actions GoogleDialogflowCompanionAgent#actions}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

The condition of the instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#condition GoogleDialogflowCompanionAgent#condition}

---

##### `disableSuggestedReply`<sup>Optional</sup> <a name="disableSuggestedReply" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.disableSuggestedReply"></a>

```java
public java.lang.Boolean|IResolvable getDisableSuggestedReply();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable suggested reply generation for this instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#disable_suggested_reply GoogleDialogflowCompanionAgent#disable_suggested_reply}

---

##### `displayDetails`<sup>Optional</sup> <a name="displayDetails" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayDetails"></a>

```java
public java.lang.String getDisplayDetails();
```

- *Type:* java.lang.String

The detailed description of this instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#display_details GoogleDialogflowCompanionAgent#display_details}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name for the instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#display_name GoogleDialogflowCompanionAgent#display_name}

---

##### `triggerEvent`<sup>Optional</sup> <a name="triggerEvent" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.triggerEvent"></a>

```java
public java.lang.String getTriggerEvent();
```

- *Type:* java.lang.String

Event that triggers the guidance instruction. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#trigger_event GoogleDialogflowCompanionAgent#trigger_event}

---

### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions;

GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions.builder()
    .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions.property.description">description</a></code> | <code>java.lang.String</code> | Description of action item. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of action item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#description GoogleDialogflowCompanionAgent#description}

---

### GoogleDialogflowCompanionAgentTimeouts <a name="GoogleDialogflowCompanionAgentTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentTimeouts;

GoogleDialogflowCompanionAgentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#create GoogleDialogflowCompanionAgent#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#delete GoogleDialogflowCompanionAgent#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#update GoogleDialogflowCompanionAgent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#create GoogleDialogflowCompanionAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#delete GoogleDialogflowCompanionAgent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#update GoogleDialogflowCompanionAgent#update}.

---

### GoogleDialogflowCompanionAgentToolsetTools <a name="GoogleDialogflowCompanionAgentToolsetTools" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentToolsetTools;

GoogleDialogflowCompanionAgentToolsetTools.builder()
    .toolset(java.lang.String)
//  .confirmationRequirement(java.lang.String)
//  .operationId(java.lang.String)
//  .parameterOverrides(IResolvable|java.util.List<GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides>)
//  .proactiveEnabled(java.lang.Boolean|IResolvable)
//  .reactiveEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.toolset">toolset</a></code> | <code>java.lang.String</code> | The name of the toolset to retrieve the schema for. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.confirmationRequirement">confirmationRequirement</a></code> | <code>java.lang.String</code> | Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.operationId">operationId</a></code> | <code>java.lang.String</code> | The 'operationId' field of the OpenAPI endpoint. The 'operationId' must be present in the toolset's definition. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.parameterOverrides">parameterOverrides</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>></code> | parameter_overrides block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.proactiveEnabled">proactiveEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the toolset tool is enabled in proactive mode. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.reactiveEnabled">reactiveEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the toolset tool is enabled in reactive mode. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.toolset"></a>

```java
public java.lang.String getToolset();
```

- *Type:* java.lang.String

The name of the toolset to retrieve the schema for. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#toolset GoogleDialogflowCompanionAgent#toolset}

---

##### `confirmationRequirement`<sup>Optional</sup> <a name="confirmationRequirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.confirmationRequirement"></a>

```java
public java.lang.String getConfirmationRequirement();
```

- *Type:* java.lang.String

Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#confirmation_requirement GoogleDialogflowCompanionAgent#confirmation_requirement}

---

##### `operationId`<sup>Optional</sup> <a name="operationId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.operationId"></a>

```java
public java.lang.String getOperationId();
```

- *Type:* java.lang.String

The 'operationId' field of the OpenAPI endpoint. The 'operationId' must be present in the toolset's definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#operation_id GoogleDialogflowCompanionAgent#operation_id}

---

##### `parameterOverrides`<sup>Optional</sup> <a name="parameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.parameterOverrides"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides> getParameterOverrides();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>>

parameter_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#parameter_overrides GoogleDialogflowCompanionAgent#parameter_overrides}

---

##### `proactiveEnabled`<sup>Optional</sup> <a name="proactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.proactiveEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the toolset tool is enabled in proactive mode.

NOTE: At least one of 'proactive_enabled' or 'reactive_enabled' should be 'true' else the toolset tool will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#proactive_enabled GoogleDialogflowCompanionAgent#proactive_enabled}

---

##### `reactiveEnabled`<sup>Optional</sup> <a name="reactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.reactiveEnabled"></a>

```java
public java.lang.Boolean|IResolvable getReactiveEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the toolset tool is enabled in reactive mode.

NOTE: At least one of 'reactive_enabled' or 'proactive_enabled' should be 'true' else the toolset tool will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#reactive_enabled GoogleDialogflowCompanionAgent#reactive_enabled}

---

### GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides <a name="GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides;

GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.builder()
    .contextReferenceKey(java.lang.String)
    .parameterName(java.lang.String)
//  .fieldPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.contextReferenceKey">contextReferenceKey</a></code> | <code>java.lang.String</code> | The key of the context reference in ingested context references. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.parameterName">parameterName</a></code> | <code>java.lang.String</code> | The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.fieldPath">fieldPath</a></code> | <code>java.lang.String</code> | The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it). |

---

##### `contextReferenceKey`<sup>Required</sup> <a name="contextReferenceKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.contextReferenceKey"></a>

```java
public java.lang.String getContextReferenceKey();
```

- *Type:* java.lang.String

The key of the context reference in ingested context references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#context_reference_key GoogleDialogflowCompanionAgent#context_reference_key}

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.parameterName"></a>

```java
public java.lang.String getParameterName();
```

- *Type:* java.lang.String

The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#parameter_name GoogleDialogflowCompanionAgent#parameter_name}

---

##### `fieldPath`<sup>Optional</sup> <a name="fieldPath" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.fieldPath"></a>

```java
public java.lang.String getFieldPath();
```

- *Type:* java.lang.String

The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#field_path GoogleDialogflowCompanionAgent#field_path}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCompanionAgentCesToolSpecsList <a name="GoogleDialogflowCompanionAgentCesToolSpecsList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentCesToolSpecsList;

new GoogleDialogflowCompanionAgentCesToolSpecsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.get"></a>

```java
public GoogleDialogflowCompanionAgentCesToolSpecsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCompanionAgentCesToolSpecs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>>

---


### GoogleDialogflowCompanionAgentCesToolSpecsOutputReference <a name="GoogleDialogflowCompanionAgentCesToolSpecsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference;

new GoogleDialogflowCompanionAgentCesToolSpecsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.putParameterOverrides">putParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetCesTool">resetCesTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetConfirmationRequirement">resetConfirmationRequirement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetParameterOverrides">resetParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetProactiveEnabled">resetProactiveEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetReactiveEnabled">resetReactiveEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameterOverrides` <a name="putParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.putParameterOverrides"></a>

```java
public void putParameterOverrides(IResolvable|java.util.List<GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.putParameterOverrides.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>>

---

##### `resetCesTool` <a name="resetCesTool" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetCesTool"></a>

```java
public void resetCesTool()
```

##### `resetConfirmationRequirement` <a name="resetConfirmationRequirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetConfirmationRequirement"></a>

```java
public void resetConfirmationRequirement()
```

##### `resetParameterOverrides` <a name="resetParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetParameterOverrides"></a>

```java
public void resetParameterOverrides()
```

##### `resetProactiveEnabled` <a name="resetProactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetProactiveEnabled"></a>

```java
public void resetProactiveEnabled()
```

##### `resetReactiveEnabled` <a name="resetReactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetReactiveEnabled"></a>

```java
public void resetReactiveEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverrides">parameterOverrides</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.cesToolInput">cesToolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirementInput">confirmationRequirementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverridesInput">parameterOverridesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabledInput">proactiveEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabledInput">reactiveEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.cesTool">cesTool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirement">confirmationRequirement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabled">proactiveEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabled">reactiveEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameterOverrides`<sup>Required</sup> <a name="parameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverrides"></a>

```java
public GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList getParameterOverrides();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList</a>

---

##### `cesToolInput`<sup>Optional</sup> <a name="cesToolInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.cesToolInput"></a>

```java
public java.lang.String getCesToolInput();
```

- *Type:* java.lang.String

---

##### `confirmationRequirementInput`<sup>Optional</sup> <a name="confirmationRequirementInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirementInput"></a>

```java
public java.lang.String getConfirmationRequirementInput();
```

- *Type:* java.lang.String

---

##### `parameterOverridesInput`<sup>Optional</sup> <a name="parameterOverridesInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverridesInput"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides> getParameterOverridesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>>

---

##### `proactiveEnabledInput`<sup>Optional</sup> <a name="proactiveEnabledInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getProactiveEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `reactiveEnabledInput`<sup>Optional</sup> <a name="reactiveEnabledInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getReactiveEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cesTool`<sup>Required</sup> <a name="cesTool" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.cesTool"></a>

```java
public java.lang.String getCesTool();
```

- *Type:* java.lang.String

---

##### `confirmationRequirement`<sup>Required</sup> <a name="confirmationRequirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirement"></a>

```java
public java.lang.String getConfirmationRequirement();
```

- *Type:* java.lang.String

---

##### `proactiveEnabled`<sup>Required</sup> <a name="proactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `reactiveEnabled`<sup>Required</sup> <a name="reactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabled"></a>

```java
public java.lang.Boolean|IResolvable getReactiveEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDialogflowCompanionAgentCesToolSpecs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs">GoogleDialogflowCompanionAgentCesToolSpecs</a>

---


### GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList <a name="GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList;

new GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.get"></a>

```java
public GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>>

---


### GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference <a name="GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference;

new GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resetFieldPath">resetFieldPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldPath` <a name="resetFieldPath" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resetFieldPath"></a>

```java
public void resetFieldPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKeyInput">contextReferenceKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKey">contextReferenceKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPath">fieldPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterName">parameterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contextReferenceKeyInput`<sup>Optional</sup> <a name="contextReferenceKeyInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKeyInput"></a>

```java
public java.lang.String getContextReferenceKeyInput();
```

- *Type:* java.lang.String

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPathInput"></a>

```java
public java.lang.String getFieldPathInput();
```

- *Type:* java.lang.String

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterNameInput"></a>

```java
public java.lang.String getParameterNameInput();
```

- *Type:* java.lang.String

---

##### `contextReferenceKey`<sup>Required</sup> <a name="contextReferenceKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKey"></a>

```java
public java.lang.String getContextReferenceKey();
```

- *Type:* java.lang.String

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPath"></a>

```java
public java.lang.String getFieldPath();
```

- *Type:* java.lang.String

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterName"></a>

```java
public java.lang.String getParameterName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides</a>

---


### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList;

new GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.get"></a>

```java
public GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>>

---


### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference;

new GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>

---


### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList;

new GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.get"></a>

```java
public GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>>

---


### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference;

new GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisableSuggestedReply">resetDisableSuggestedReply</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayDetails">resetDisplayDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetTriggerEvent">resetTriggerEvent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.putActions"></a>

```java
public void putActions(IResolvable|java.util.List<GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.putActions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>>

---

##### `resetActions` <a name="resetActions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetActions"></a>

```java
public void resetActions()
```

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetDisableSuggestedReply` <a name="resetDisableSuggestedReply" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisableSuggestedReply"></a>

```java
public void resetDisableSuggestedReply()
```

##### `resetDisplayDetails` <a name="resetDisplayDetails" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayDetails"></a>

```java
public void resetDisplayDetails()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetTriggerEvent` <a name="resetTriggerEvent" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetTriggerEvent"></a>

```java
public void resetTriggerEvent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actionsInput">actionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.conditionInput">conditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReplyInput">disableSuggestedReplyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetailsInput">displayDetailsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEventInput">triggerEventInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReply">disableSuggestedReply</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetails">displayDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEvent">triggerEvent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actions"></a>

```java
public GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList getActions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actionsInput"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions> getActionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions</a>>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.conditionInput"></a>

```java
public java.lang.String getConditionInput();
```

- *Type:* java.lang.String

---

##### `disableSuggestedReplyInput`<sup>Optional</sup> <a name="disableSuggestedReplyInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReplyInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableSuggestedReplyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayDetailsInput`<sup>Optional</sup> <a name="displayDetailsInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetailsInput"></a>

```java
public java.lang.String getDisplayDetailsInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `triggerEventInput`<sup>Optional</sup> <a name="triggerEventInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEventInput"></a>

```java
public java.lang.String getTriggerEventInput();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `disableSuggestedReply`<sup>Required</sup> <a name="disableSuggestedReply" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReply"></a>

```java
public java.lang.Boolean|IResolvable getDisableSuggestedReply();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayDetails`<sup>Required</sup> <a name="displayDetails" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetails"></a>

```java
public java.lang.String getDisplayDetails();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `triggerEvent`<sup>Required</sup> <a name="triggerEvent" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEvent"></a>

```java
public java.lang.String getTriggerEvent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>

---


### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference;

new GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.putGuidanceInstructions">putGuidanceInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetGuidanceInstructions">resetGuidanceInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetOverarchingGuidance">resetOverarchingGuidance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGuidanceInstructions` <a name="putGuidanceInstructions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.putGuidanceInstructions"></a>

```java
public void putGuidanceInstructions(IResolvable|java.util.List<GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.putGuidanceInstructions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>>

---

##### `resetGuidanceInstructions` <a name="resetGuidanceInstructions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetGuidanceInstructions"></a>

```java
public void resetGuidanceInstructions()
```

##### `resetOverarchingGuidance` <a name="resetOverarchingGuidance" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetOverarchingGuidance"></a>

```java
public void resetOverarchingGuidance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructions">guidanceInstructions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructionsInput">guidanceInstructionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidanceInput">overarchingGuidanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidance">overarchingGuidance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `guidanceInstructions`<sup>Required</sup> <a name="guidanceInstructions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructions"></a>

```java
public GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList getGuidanceInstructions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList</a>

---

##### `guidanceInstructionsInput`<sup>Optional</sup> <a name="guidanceInstructionsInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructionsInput"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions> getGuidanceInstructionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions</a>>

---

##### `overarchingGuidanceInput`<sup>Optional</sup> <a name="overarchingGuidanceInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidanceInput"></a>

```java
public java.lang.String getOverarchingGuidanceInput();
```

- *Type:* java.lang.String

---

##### `overarchingGuidance`<sup>Required</sup> <a name="overarchingGuidance" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidance"></a>

```java
public java.lang.String getOverarchingGuidance();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

---


### GoogleDialogflowCompanionAgentSkillConfigsList <a name="GoogleDialogflowCompanionAgentSkillConfigsList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentSkillConfigsList;

new GoogleDialogflowCompanionAgentSkillConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.get"></a>

```java
public GoogleDialogflowCompanionAgentSkillConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCompanionAgentSkillConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>>

---


### GoogleDialogflowCompanionAgentSkillConfigsOutputReference <a name="GoogleDialogflowCompanionAgentSkillConfigsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference;

new GoogleDialogflowCompanionAgentSkillConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.putGuidanceSkillConfig">putGuidanceSkillConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resetGuidanceSkillConfig">resetGuidanceSkillConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resetSkillTriggeringEvent">resetSkillTriggeringEvent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGuidanceSkillConfig` <a name="putGuidanceSkillConfig" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.putGuidanceSkillConfig"></a>

```java
public void putGuidanceSkillConfig(GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.putGuidanceSkillConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

---

##### `resetGuidanceSkillConfig` <a name="resetGuidanceSkillConfig" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resetGuidanceSkillConfig"></a>

```java
public void resetGuidanceSkillConfig()
```

##### `resetSkillTriggeringEvent` <a name="resetSkillTriggeringEvent" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resetSkillTriggeringEvent"></a>

```java
public void resetSkillTriggeringEvent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfig">guidanceSkillConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfigInput">guidanceSkillConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEventInput">skillTriggeringEventInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEvent">skillTriggeringEvent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `guidanceSkillConfig`<sup>Required</sup> <a name="guidanceSkillConfig" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfig"></a>

```java
public GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference getGuidanceSkillConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference</a>

---

##### `guidanceSkillConfigInput`<sup>Optional</sup> <a name="guidanceSkillConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfigInput"></a>

```java
public GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig getGuidanceSkillConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

---

##### `skillTriggeringEventInput`<sup>Optional</sup> <a name="skillTriggeringEventInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEventInput"></a>

```java
public java.lang.String getSkillTriggeringEventInput();
```

- *Type:* java.lang.String

---

##### `skillTriggeringEvent`<sup>Required</sup> <a name="skillTriggeringEvent" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEvent"></a>

```java
public java.lang.String getSkillTriggeringEvent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDialogflowCompanionAgentSkillConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs">GoogleDialogflowCompanionAgentSkillConfigs</a>

---


### GoogleDialogflowCompanionAgentTimeoutsOutputReference <a name="GoogleDialogflowCompanionAgentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentTimeoutsOutputReference;

new GoogleDialogflowCompanionAgentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDialogflowCompanionAgentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a>

---


### GoogleDialogflowCompanionAgentToolsetToolsList <a name="GoogleDialogflowCompanionAgentToolsetToolsList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentToolsetToolsList;

new GoogleDialogflowCompanionAgentToolsetToolsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.get"></a>

```java
public GoogleDialogflowCompanionAgentToolsetToolsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCompanionAgentToolsetTools> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>>

---


### GoogleDialogflowCompanionAgentToolsetToolsOutputReference <a name="GoogleDialogflowCompanionAgentToolsetToolsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference;

new GoogleDialogflowCompanionAgentToolsetToolsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.putParameterOverrides">putParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetConfirmationRequirement">resetConfirmationRequirement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetOperationId">resetOperationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetParameterOverrides">resetParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetProactiveEnabled">resetProactiveEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetReactiveEnabled">resetReactiveEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameterOverrides` <a name="putParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.putParameterOverrides"></a>

```java
public void putParameterOverrides(IResolvable|java.util.List<GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.putParameterOverrides.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>>

---

##### `resetConfirmationRequirement` <a name="resetConfirmationRequirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetConfirmationRequirement"></a>

```java
public void resetConfirmationRequirement()
```

##### `resetOperationId` <a name="resetOperationId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetOperationId"></a>

```java
public void resetOperationId()
```

##### `resetParameterOverrides` <a name="resetParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetParameterOverrides"></a>

```java
public void resetParameterOverrides()
```

##### `resetProactiveEnabled` <a name="resetProactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetProactiveEnabled"></a>

```java
public void resetProactiveEnabled()
```

##### `resetReactiveEnabled` <a name="resetReactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetReactiveEnabled"></a>

```java
public void resetReactiveEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverrides">parameterOverrides</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList">GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirementInput">confirmationRequirementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.operationIdInput">operationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverridesInput">parameterOverridesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabledInput">proactiveEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabledInput">reactiveEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.toolsetInput">toolsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirement">confirmationRequirement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.operationId">operationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabled">proactiveEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabled">reactiveEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.toolset">toolset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameterOverrides`<sup>Required</sup> <a name="parameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverrides"></a>

```java
public GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList getParameterOverrides();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList">GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList</a>

---

##### `confirmationRequirementInput`<sup>Optional</sup> <a name="confirmationRequirementInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirementInput"></a>

```java
public java.lang.String getConfirmationRequirementInput();
```

- *Type:* java.lang.String

---

##### `operationIdInput`<sup>Optional</sup> <a name="operationIdInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.operationIdInput"></a>

```java
public java.lang.String getOperationIdInput();
```

- *Type:* java.lang.String

---

##### `parameterOverridesInput`<sup>Optional</sup> <a name="parameterOverridesInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverridesInput"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides> getParameterOverridesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>>

---

##### `proactiveEnabledInput`<sup>Optional</sup> <a name="proactiveEnabledInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getProactiveEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `reactiveEnabledInput`<sup>Optional</sup> <a name="reactiveEnabledInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getReactiveEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `toolsetInput`<sup>Optional</sup> <a name="toolsetInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.toolsetInput"></a>

```java
public java.lang.String getToolsetInput();
```

- *Type:* java.lang.String

---

##### `confirmationRequirement`<sup>Required</sup> <a name="confirmationRequirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirement"></a>

```java
public java.lang.String getConfirmationRequirement();
```

- *Type:* java.lang.String

---

##### `operationId`<sup>Required</sup> <a name="operationId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.operationId"></a>

```java
public java.lang.String getOperationId();
```

- *Type:* java.lang.String

---

##### `proactiveEnabled`<sup>Required</sup> <a name="proactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabled"></a>

```java
public java.lang.Boolean|IResolvable getProactiveEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `reactiveEnabled`<sup>Required</sup> <a name="reactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabled"></a>

```java
public java.lang.Boolean|IResolvable getReactiveEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.toolset"></a>

```java
public java.lang.String getToolset();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDialogflowCompanionAgentToolsetTools getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools">GoogleDialogflowCompanionAgentToolsetTools</a>

---


### GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList <a name="GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList;

new GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.get"></a>

```java
public GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>>

---


### GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference <a name="GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_companion_agent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference;

new GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resetFieldPath">resetFieldPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldPath` <a name="resetFieldPath" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resetFieldPath"></a>

```java
public void resetFieldPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKeyInput">contextReferenceKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKey">contextReferenceKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPath">fieldPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterName">parameterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contextReferenceKeyInput`<sup>Optional</sup> <a name="contextReferenceKeyInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKeyInput"></a>

```java
public java.lang.String getContextReferenceKeyInput();
```

- *Type:* java.lang.String

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPathInput"></a>

```java
public java.lang.String getFieldPathInput();
```

- *Type:* java.lang.String

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterNameInput"></a>

```java
public java.lang.String getParameterNameInput();
```

- *Type:* java.lang.String

---

##### `contextReferenceKey`<sup>Required</sup> <a name="contextReferenceKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKey"></a>

```java
public java.lang.String getContextReferenceKey();
```

- *Type:* java.lang.String

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPath"></a>

```java
public java.lang.String getFieldPath();
```

- *Type:* java.lang.String

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterName"></a>

```java
public java.lang.String getParameterName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides">GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides</a>

---



