# `googleIapAgentRegistryMcpServerIamBinding` Submodule <a name="`googleIapAgentRegistryMcpServerIamBinding` Submodule" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapAgentRegistryMcpServerIamBinding <a name="GoogleIapAgentRegistryMcpServerIamBinding" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding google_iap_agent_registry_mcp_server_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_mcp_server_iam_binding.GoogleIapAgentRegistryMcpServerIamBinding;

GoogleIapAgentRegistryMcpServerIamBinding.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mcpServerId(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .role(java.lang.String)
//  .condition(GoogleIapAgentRegistryMcpServerIamBindingCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.mcpServerId">mcpServerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#mcp_server_id GoogleIapAgentRegistryMcpServerIamBinding#mcp_server_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#members GoogleIapAgentRegistryMcpServerIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#role GoogleIapAgentRegistryMcpServerIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition">GoogleIapAgentRegistryMcpServerIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#id GoogleIapAgentRegistryMcpServerIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#location GoogleIapAgentRegistryMcpServerIamBinding#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#project GoogleIapAgentRegistryMcpServerIamBinding#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mcpServerId`<sup>Required</sup> <a name="mcpServerId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.mcpServerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#mcp_server_id GoogleIapAgentRegistryMcpServerIamBinding#mcp_server_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.members"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#members GoogleIapAgentRegistryMcpServerIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#role GoogleIapAgentRegistryMcpServerIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition">GoogleIapAgentRegistryMcpServerIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#condition GoogleIapAgentRegistryMcpServerIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#id GoogleIapAgentRegistryMcpServerIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#location GoogleIapAgentRegistryMcpServerIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#project GoogleIapAgentRegistryMcpServerIamBinding#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.putCondition"></a>

```java
public void putCondition(GoogleIapAgentRegistryMcpServerIamBindingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition">GoogleIapAgentRegistryMcpServerIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIapAgentRegistryMcpServerIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_mcp_server_iam_binding.GoogleIapAgentRegistryMcpServerIamBinding;

GoogleIapAgentRegistryMcpServerIamBinding.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_mcp_server_iam_binding.GoogleIapAgentRegistryMcpServerIamBinding;

GoogleIapAgentRegistryMcpServerIamBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_mcp_server_iam_binding.GoogleIapAgentRegistryMcpServerIamBinding;

GoogleIapAgentRegistryMcpServerIamBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_mcp_server_iam_binding.GoogleIapAgentRegistryMcpServerIamBinding;

GoogleIapAgentRegistryMcpServerIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleIapAgentRegistryMcpServerIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleIapAgentRegistryMcpServerIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleIapAgentRegistryMcpServerIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleIapAgentRegistryMcpServerIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIapAgentRegistryMcpServerIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference">GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition">GoogleIapAgentRegistryMcpServerIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.mcpServerIdInput">mcpServerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.mcpServerId">mcpServerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.condition"></a>

```java
public GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference">GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.conditionInput"></a>

```java
public GoogleIapAgentRegistryMcpServerIamBindingCondition getConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition">GoogleIapAgentRegistryMcpServerIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mcpServerIdInput`<sup>Optional</sup> <a name="mcpServerIdInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.mcpServerIdInput"></a>

```java
public java.lang.String getMcpServerIdInput();
```

- *Type:* java.lang.String

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `mcpServerId`<sup>Required</sup> <a name="mcpServerId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.mcpServerId"></a>

```java
public java.lang.String getMcpServerId();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapAgentRegistryMcpServerIamBindingCondition <a name="GoogleIapAgentRegistryMcpServerIamBindingCondition" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_mcp_server_iam_binding.GoogleIapAgentRegistryMcpServerIamBindingCondition;

GoogleIapAgentRegistryMcpServerIamBindingCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#expression GoogleIapAgentRegistryMcpServerIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#title GoogleIapAgentRegistryMcpServerIamBinding#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#description GoogleIapAgentRegistryMcpServerIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#expression GoogleIapAgentRegistryMcpServerIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#title GoogleIapAgentRegistryMcpServerIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#description GoogleIapAgentRegistryMcpServerIamBinding#description}.

---

### GoogleIapAgentRegistryMcpServerIamBindingConfig <a name="GoogleIapAgentRegistryMcpServerIamBindingConfig" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_mcp_server_iam_binding.GoogleIapAgentRegistryMcpServerIamBindingConfig;

GoogleIapAgentRegistryMcpServerIamBindingConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mcpServerId(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .role(java.lang.String)
//  .condition(GoogleIapAgentRegistryMcpServerIamBindingCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.mcpServerId">mcpServerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#mcp_server_id GoogleIapAgentRegistryMcpServerIamBinding#mcp_server_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#members GoogleIapAgentRegistryMcpServerIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#role GoogleIapAgentRegistryMcpServerIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition">GoogleIapAgentRegistryMcpServerIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#id GoogleIapAgentRegistryMcpServerIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#location GoogleIapAgentRegistryMcpServerIamBinding#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#project GoogleIapAgentRegistryMcpServerIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mcpServerId`<sup>Required</sup> <a name="mcpServerId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.mcpServerId"></a>

```java
public java.lang.String getMcpServerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#mcp_server_id GoogleIapAgentRegistryMcpServerIamBinding#mcp_server_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#members GoogleIapAgentRegistryMcpServerIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#role GoogleIapAgentRegistryMcpServerIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.condition"></a>

```java
public GoogleIapAgentRegistryMcpServerIamBindingCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition">GoogleIapAgentRegistryMcpServerIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#condition GoogleIapAgentRegistryMcpServerIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#id GoogleIapAgentRegistryMcpServerIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#location GoogleIapAgentRegistryMcpServerIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_iap_agent_registry_mcp_server_iam_binding#project GoogleIapAgentRegistryMcpServerIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference <a name="GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_mcp_server_iam_binding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference;

new GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition">GoogleIapAgentRegistryMcpServerIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingConditionOutputReference.property.internalValue"></a>

```java
public GoogleIapAgentRegistryMcpServerIamBindingCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamBinding.GoogleIapAgentRegistryMcpServerIamBindingCondition">GoogleIapAgentRegistryMcpServerIamBindingCondition</a>

---



