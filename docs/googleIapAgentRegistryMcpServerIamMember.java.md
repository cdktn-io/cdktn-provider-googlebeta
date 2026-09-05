# `googleIapAgentRegistryMcpServerIamMember` Submodule <a name="`googleIapAgentRegistryMcpServerIamMember` Submodule" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapAgentRegistryMcpServerIamMember <a name="GoogleIapAgentRegistryMcpServerIamMember" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member google_iap_agent_registry_mcp_server_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_mcp_server_iam_member.GoogleIapAgentRegistryMcpServerIamMember;

GoogleIapAgentRegistryMcpServerIamMember.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mcpServerId(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleIapAgentRegistryMcpServerIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.mcpServerId">mcpServerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#mcp_server_id GoogleIapAgentRegistryMcpServerIamMember#mcp_server_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#member GoogleIapAgentRegistryMcpServerIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#role GoogleIapAgentRegistryMcpServerIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberCondition">GoogleIapAgentRegistryMcpServerIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#id GoogleIapAgentRegistryMcpServerIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#location GoogleIapAgentRegistryMcpServerIamMember#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#project GoogleIapAgentRegistryMcpServerIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mcpServerId`<sup>Required</sup> <a name="mcpServerId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.mcpServerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#mcp_server_id GoogleIapAgentRegistryMcpServerIamMember#mcp_server_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#member GoogleIapAgentRegistryMcpServerIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#role GoogleIapAgentRegistryMcpServerIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberCondition">GoogleIapAgentRegistryMcpServerIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#condition GoogleIapAgentRegistryMcpServerIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#id GoogleIapAgentRegistryMcpServerIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#location GoogleIapAgentRegistryMcpServerIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#project GoogleIapAgentRegistryMcpServerIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.putCondition"></a>

```java
public void putCondition(GoogleIapAgentRegistryMcpServerIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberCondition">GoogleIapAgentRegistryMcpServerIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIapAgentRegistryMcpServerIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_mcp_server_iam_member.GoogleIapAgentRegistryMcpServerIamMember;

GoogleIapAgentRegistryMcpServerIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_mcp_server_iam_member.GoogleIapAgentRegistryMcpServerIamMember;

GoogleIapAgentRegistryMcpServerIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_mcp_server_iam_member.GoogleIapAgentRegistryMcpServerIamMember;

GoogleIapAgentRegistryMcpServerIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_mcp_server_iam_member.GoogleIapAgentRegistryMcpServerIamMember;

GoogleIapAgentRegistryMcpServerIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleIapAgentRegistryMcpServerIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleIapAgentRegistryMcpServerIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleIapAgentRegistryMcpServerIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleIapAgentRegistryMcpServerIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIapAgentRegistryMcpServerIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference">GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberCondition">GoogleIapAgentRegistryMcpServerIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.mcpServerIdInput">mcpServerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.mcpServerId">mcpServerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.condition"></a>

```java
public GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference">GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.conditionInput"></a>

```java
public GoogleIapAgentRegistryMcpServerIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberCondition">GoogleIapAgentRegistryMcpServerIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mcpServerIdInput`<sup>Optional</sup> <a name="mcpServerIdInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.mcpServerIdInput"></a>

```java
public java.lang.String getMcpServerIdInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `mcpServerId`<sup>Required</sup> <a name="mcpServerId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.mcpServerId"></a>

```java
public java.lang.String getMcpServerId();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapAgentRegistryMcpServerIamMemberCondition <a name="GoogleIapAgentRegistryMcpServerIamMemberCondition" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberCondition.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_mcp_server_iam_member.GoogleIapAgentRegistryMcpServerIamMemberCondition;

GoogleIapAgentRegistryMcpServerIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#expression GoogleIapAgentRegistryMcpServerIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#title GoogleIapAgentRegistryMcpServerIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#description GoogleIapAgentRegistryMcpServerIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#expression GoogleIapAgentRegistryMcpServerIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#title GoogleIapAgentRegistryMcpServerIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#description GoogleIapAgentRegistryMcpServerIamMember#description}.

---

### GoogleIapAgentRegistryMcpServerIamMemberConfig <a name="GoogleIapAgentRegistryMcpServerIamMemberConfig" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_mcp_server_iam_member.GoogleIapAgentRegistryMcpServerIamMemberConfig;

GoogleIapAgentRegistryMcpServerIamMemberConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mcpServerId(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleIapAgentRegistryMcpServerIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.mcpServerId">mcpServerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#mcp_server_id GoogleIapAgentRegistryMcpServerIamMember#mcp_server_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#member GoogleIapAgentRegistryMcpServerIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#role GoogleIapAgentRegistryMcpServerIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberCondition">GoogleIapAgentRegistryMcpServerIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#id GoogleIapAgentRegistryMcpServerIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#location GoogleIapAgentRegistryMcpServerIamMember#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#project GoogleIapAgentRegistryMcpServerIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mcpServerId`<sup>Required</sup> <a name="mcpServerId" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.mcpServerId"></a>

```java
public java.lang.String getMcpServerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#mcp_server_id GoogleIapAgentRegistryMcpServerIamMember#mcp_server_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#member GoogleIapAgentRegistryMcpServerIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#role GoogleIapAgentRegistryMcpServerIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.condition"></a>

```java
public GoogleIapAgentRegistryMcpServerIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberCondition">GoogleIapAgentRegistryMcpServerIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#condition GoogleIapAgentRegistryMcpServerIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#id GoogleIapAgentRegistryMcpServerIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#location GoogleIapAgentRegistryMcpServerIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_mcp_server_iam_member#project GoogleIapAgentRegistryMcpServerIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference <a name="GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_mcp_server_iam_member.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference;

new GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberCondition">GoogleIapAgentRegistryMcpServerIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberConditionOutputReference.property.internalValue"></a>

```java
public GoogleIapAgentRegistryMcpServerIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryMcpServerIamMember.GoogleIapAgentRegistryMcpServerIamMemberCondition">GoogleIapAgentRegistryMcpServerIamMemberCondition</a>

---



