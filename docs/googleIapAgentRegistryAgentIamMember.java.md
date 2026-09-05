# `googleIapAgentRegistryAgentIamMember` Submodule <a name="`googleIapAgentRegistryAgentIamMember` Submodule" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapAgentRegistryAgentIamMember <a name="GoogleIapAgentRegistryAgentIamMember" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member google_iap_agent_registry_agent_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_agent_iam_member.GoogleIapAgentRegistryAgentIamMember;

GoogleIapAgentRegistryAgentIamMember.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentId(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleIapAgentRegistryAgentIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.agentId">agentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#agent_id GoogleIapAgentRegistryAgentIamMember#agent_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#member GoogleIapAgentRegistryAgentIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#role GoogleIapAgentRegistryAgentIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberCondition">GoogleIapAgentRegistryAgentIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#id GoogleIapAgentRegistryAgentIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#location GoogleIapAgentRegistryAgentIamMember#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#project GoogleIapAgentRegistryAgentIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.agentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#agent_id GoogleIapAgentRegistryAgentIamMember#agent_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#member GoogleIapAgentRegistryAgentIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#role GoogleIapAgentRegistryAgentIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberCondition">GoogleIapAgentRegistryAgentIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#condition GoogleIapAgentRegistryAgentIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#id GoogleIapAgentRegistryAgentIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#location GoogleIapAgentRegistryAgentIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#project GoogleIapAgentRegistryAgentIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.putCondition"></a>

```java
public void putCondition(GoogleIapAgentRegistryAgentIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberCondition">GoogleIapAgentRegistryAgentIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIapAgentRegistryAgentIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_agent_iam_member.GoogleIapAgentRegistryAgentIamMember;

GoogleIapAgentRegistryAgentIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_agent_iam_member.GoogleIapAgentRegistryAgentIamMember;

GoogleIapAgentRegistryAgentIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_agent_iam_member.GoogleIapAgentRegistryAgentIamMember;

GoogleIapAgentRegistryAgentIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_agent_iam_member.GoogleIapAgentRegistryAgentIamMember;

GoogleIapAgentRegistryAgentIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleIapAgentRegistryAgentIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleIapAgentRegistryAgentIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleIapAgentRegistryAgentIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleIapAgentRegistryAgentIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIapAgentRegistryAgentIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference">GoogleIapAgentRegistryAgentIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.agentIdInput">agentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberCondition">GoogleIapAgentRegistryAgentIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.agentId">agentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.condition"></a>

```java
public GoogleIapAgentRegistryAgentIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference">GoogleIapAgentRegistryAgentIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.agentIdInput"></a>

```java
public java.lang.String getAgentIdInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.conditionInput"></a>

```java
public GoogleIapAgentRegistryAgentIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberCondition">GoogleIapAgentRegistryAgentIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.agentId"></a>

```java
public java.lang.String getAgentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapAgentRegistryAgentIamMemberCondition <a name="GoogleIapAgentRegistryAgentIamMemberCondition" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberCondition.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_agent_iam_member.GoogleIapAgentRegistryAgentIamMemberCondition;

GoogleIapAgentRegistryAgentIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#expression GoogleIapAgentRegistryAgentIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#title GoogleIapAgentRegistryAgentIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#description GoogleIapAgentRegistryAgentIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#expression GoogleIapAgentRegistryAgentIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#title GoogleIapAgentRegistryAgentIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#description GoogleIapAgentRegistryAgentIamMember#description}.

---

### GoogleIapAgentRegistryAgentIamMemberConfig <a name="GoogleIapAgentRegistryAgentIamMemberConfig" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_agent_iam_member.GoogleIapAgentRegistryAgentIamMemberConfig;

GoogleIapAgentRegistryAgentIamMemberConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentId(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleIapAgentRegistryAgentIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.agentId">agentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#agent_id GoogleIapAgentRegistryAgentIamMember#agent_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#member GoogleIapAgentRegistryAgentIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#role GoogleIapAgentRegistryAgentIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberCondition">GoogleIapAgentRegistryAgentIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#id GoogleIapAgentRegistryAgentIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#location GoogleIapAgentRegistryAgentIamMember#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#project GoogleIapAgentRegistryAgentIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.agentId"></a>

```java
public java.lang.String getAgentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#agent_id GoogleIapAgentRegistryAgentIamMember#agent_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#member GoogleIapAgentRegistryAgentIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#role GoogleIapAgentRegistryAgentIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.condition"></a>

```java
public GoogleIapAgentRegistryAgentIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberCondition">GoogleIapAgentRegistryAgentIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#condition GoogleIapAgentRegistryAgentIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#id GoogleIapAgentRegistryAgentIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#location GoogleIapAgentRegistryAgentIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_iap_agent_registry_agent_iam_member#project GoogleIapAgentRegistryAgentIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIapAgentRegistryAgentIamMemberConditionOutputReference <a name="GoogleIapAgentRegistryAgentIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iap_agent_registry_agent_iam_member.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference;

new GoogleIapAgentRegistryAgentIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberCondition">GoogleIapAgentRegistryAgentIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberConditionOutputReference.property.internalValue"></a>

```java
public GoogleIapAgentRegistryAgentIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapAgentRegistryAgentIamMember.GoogleIapAgentRegistryAgentIamMemberCondition">GoogleIapAgentRegistryAgentIamMemberCondition</a>

---



