# `googleAgentIdentityAuthProviderIamMember` Submodule <a name="`googleAgentIdentityAuthProviderIamMember` Submodule" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAgentIdentityAuthProviderIamMember <a name="GoogleAgentIdentityAuthProviderIamMember" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member google_agent_identity_auth_provider_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_agent_identity_auth_provider_iam_member.GoogleAgentIdentityAuthProviderIamMember;

GoogleAgentIdentityAuthProviderIamMember.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authProviderId(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleAgentIdentityAuthProviderIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.authProviderId">authProviderId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#auth_provider_id GoogleAgentIdentityAuthProviderIamMember#auth_provider_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#member GoogleAgentIdentityAuthProviderIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#role GoogleAgentIdentityAuthProviderIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberCondition">GoogleAgentIdentityAuthProviderIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#id GoogleAgentIdentityAuthProviderIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#location GoogleAgentIdentityAuthProviderIamMember#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#project GoogleAgentIdentityAuthProviderIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authProviderId`<sup>Required</sup> <a name="authProviderId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.authProviderId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#auth_provider_id GoogleAgentIdentityAuthProviderIamMember#auth_provider_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#member GoogleAgentIdentityAuthProviderIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#role GoogleAgentIdentityAuthProviderIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberCondition">GoogleAgentIdentityAuthProviderIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#condition GoogleAgentIdentityAuthProviderIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#id GoogleAgentIdentityAuthProviderIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#location GoogleAgentIdentityAuthProviderIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#project GoogleAgentIdentityAuthProviderIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.putCondition"></a>

```java
public void putCondition(GoogleAgentIdentityAuthProviderIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberCondition">GoogleAgentIdentityAuthProviderIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleAgentIdentityAuthProviderIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_agent_identity_auth_provider_iam_member.GoogleAgentIdentityAuthProviderIamMember;

GoogleAgentIdentityAuthProviderIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_agent_identity_auth_provider_iam_member.GoogleAgentIdentityAuthProviderIamMember;

GoogleAgentIdentityAuthProviderIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_agent_identity_auth_provider_iam_member.GoogleAgentIdentityAuthProviderIamMember;

GoogleAgentIdentityAuthProviderIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_agent_identity_auth_provider_iam_member.GoogleAgentIdentityAuthProviderIamMember;

GoogleAgentIdentityAuthProviderIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleAgentIdentityAuthProviderIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleAgentIdentityAuthProviderIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleAgentIdentityAuthProviderIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleAgentIdentityAuthProviderIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleAgentIdentityAuthProviderIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference">GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.authProviderIdInput">authProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberCondition">GoogleAgentIdentityAuthProviderIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.authProviderId">authProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.condition"></a>

```java
public GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference">GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `authProviderIdInput`<sup>Optional</sup> <a name="authProviderIdInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.authProviderIdInput"></a>

```java
public java.lang.String getAuthProviderIdInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.conditionInput"></a>

```java
public GoogleAgentIdentityAuthProviderIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberCondition">GoogleAgentIdentityAuthProviderIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `authProviderId`<sup>Required</sup> <a name="authProviderId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.authProviderId"></a>

```java
public java.lang.String getAuthProviderId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAgentIdentityAuthProviderIamMemberCondition <a name="GoogleAgentIdentityAuthProviderIamMemberCondition" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberCondition.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_agent_identity_auth_provider_iam_member.GoogleAgentIdentityAuthProviderIamMemberCondition;

GoogleAgentIdentityAuthProviderIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#expression GoogleAgentIdentityAuthProviderIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#title GoogleAgentIdentityAuthProviderIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#description GoogleAgentIdentityAuthProviderIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#expression GoogleAgentIdentityAuthProviderIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#title GoogleAgentIdentityAuthProviderIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#description GoogleAgentIdentityAuthProviderIamMember#description}.

---

### GoogleAgentIdentityAuthProviderIamMemberConfig <a name="GoogleAgentIdentityAuthProviderIamMemberConfig" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_agent_identity_auth_provider_iam_member.GoogleAgentIdentityAuthProviderIamMemberConfig;

GoogleAgentIdentityAuthProviderIamMemberConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authProviderId(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleAgentIdentityAuthProviderIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.authProviderId">authProviderId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#auth_provider_id GoogleAgentIdentityAuthProviderIamMember#auth_provider_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#member GoogleAgentIdentityAuthProviderIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#role GoogleAgentIdentityAuthProviderIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberCondition">GoogleAgentIdentityAuthProviderIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#id GoogleAgentIdentityAuthProviderIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#location GoogleAgentIdentityAuthProviderIamMember#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#project GoogleAgentIdentityAuthProviderIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authProviderId`<sup>Required</sup> <a name="authProviderId" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.authProviderId"></a>

```java
public java.lang.String getAuthProviderId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#auth_provider_id GoogleAgentIdentityAuthProviderIamMember#auth_provider_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#member GoogleAgentIdentityAuthProviderIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#role GoogleAgentIdentityAuthProviderIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.condition"></a>

```java
public GoogleAgentIdentityAuthProviderIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberCondition">GoogleAgentIdentityAuthProviderIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#condition GoogleAgentIdentityAuthProviderIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#id GoogleAgentIdentityAuthProviderIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#location GoogleAgentIdentityAuthProviderIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_agent_identity_auth_provider_iam_member#project GoogleAgentIdentityAuthProviderIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference <a name="GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_agent_identity_auth_provider_iam_member.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference;

new GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberCondition">GoogleAgentIdentityAuthProviderIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberConditionOutputReference.property.internalValue"></a>

```java
public GoogleAgentIdentityAuthProviderIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentIdentityAuthProviderIamMember.GoogleAgentIdentityAuthProviderIamMemberCondition">GoogleAgentIdentityAuthProviderIamMemberCondition</a>

---



