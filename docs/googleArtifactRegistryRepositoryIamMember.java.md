# `googleArtifactRegistryRepositoryIamMember` Submodule <a name="`googleArtifactRegistryRepositoryIamMember` Submodule" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleArtifactRegistryRepositoryIamMember <a name="GoogleArtifactRegistryRepositoryIamMember" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member google_artifact_registry_repository_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_artifact_registry_repository_iam_member.GoogleArtifactRegistryRepositoryIamMember;

GoogleArtifactRegistryRepositoryIamMember.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .member(java.lang.String)
    .repository(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleArtifactRegistryRepositoryIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#member GoogleArtifactRegistryRepositoryIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#repository GoogleArtifactRegistryRepositoryIamMember#repository}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#role GoogleArtifactRegistryRepositoryIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberCondition">GoogleArtifactRegistryRepositoryIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#id GoogleArtifactRegistryRepositoryIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#location GoogleArtifactRegistryRepositoryIamMember#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#project GoogleArtifactRegistryRepositoryIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#member GoogleArtifactRegistryRepositoryIamMember#member}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#repository GoogleArtifactRegistryRepositoryIamMember#repository}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#role GoogleArtifactRegistryRepositoryIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberCondition">GoogleArtifactRegistryRepositoryIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#condition GoogleArtifactRegistryRepositoryIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#id GoogleArtifactRegistryRepositoryIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#location GoogleArtifactRegistryRepositoryIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#project GoogleArtifactRegistryRepositoryIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.putCondition"></a>

```java
public void putCondition(GoogleArtifactRegistryRepositoryIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberCondition">GoogleArtifactRegistryRepositoryIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleArtifactRegistryRepositoryIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_artifact_registry_repository_iam_member.GoogleArtifactRegistryRepositoryIamMember;

GoogleArtifactRegistryRepositoryIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_artifact_registry_repository_iam_member.GoogleArtifactRegistryRepositoryIamMember;

GoogleArtifactRegistryRepositoryIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_artifact_registry_repository_iam_member.GoogleArtifactRegistryRepositoryIamMember;

GoogleArtifactRegistryRepositoryIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_artifact_registry_repository_iam_member.GoogleArtifactRegistryRepositoryIamMember;

GoogleArtifactRegistryRepositoryIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleArtifactRegistryRepositoryIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleArtifactRegistryRepositoryIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleArtifactRegistryRepositoryIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleArtifactRegistryRepositoryIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleArtifactRegistryRepositoryIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference">GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberCondition">GoogleArtifactRegistryRepositoryIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.condition"></a>

```java
public GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference">GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.conditionInput"></a>

```java
public GoogleArtifactRegistryRepositoryIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberCondition">GoogleArtifactRegistryRepositoryIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleArtifactRegistryRepositoryIamMemberCondition <a name="GoogleArtifactRegistryRepositoryIamMemberCondition" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberCondition.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_artifact_registry_repository_iam_member.GoogleArtifactRegistryRepositoryIamMemberCondition;

GoogleArtifactRegistryRepositoryIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#expression GoogleArtifactRegistryRepositoryIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#title GoogleArtifactRegistryRepositoryIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#description GoogleArtifactRegistryRepositoryIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#expression GoogleArtifactRegistryRepositoryIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#title GoogleArtifactRegistryRepositoryIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#description GoogleArtifactRegistryRepositoryIamMember#description}.

---

### GoogleArtifactRegistryRepositoryIamMemberConfig <a name="GoogleArtifactRegistryRepositoryIamMemberConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_artifact_registry_repository_iam_member.GoogleArtifactRegistryRepositoryIamMemberConfig;

GoogleArtifactRegistryRepositoryIamMemberConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .member(java.lang.String)
    .repository(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleArtifactRegistryRepositoryIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#member GoogleArtifactRegistryRepositoryIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#repository GoogleArtifactRegistryRepositoryIamMember#repository}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#role GoogleArtifactRegistryRepositoryIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberCondition">GoogleArtifactRegistryRepositoryIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#id GoogleArtifactRegistryRepositoryIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#location GoogleArtifactRegistryRepositoryIamMember#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#project GoogleArtifactRegistryRepositoryIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#member GoogleArtifactRegistryRepositoryIamMember#member}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#repository GoogleArtifactRegistryRepositoryIamMember#repository}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#role GoogleArtifactRegistryRepositoryIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.condition"></a>

```java
public GoogleArtifactRegistryRepositoryIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberCondition">GoogleArtifactRegistryRepositoryIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#condition GoogleArtifactRegistryRepositoryIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#id GoogleArtifactRegistryRepositoryIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#location GoogleArtifactRegistryRepositoryIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_artifact_registry_repository_iam_member#project GoogleArtifactRegistryRepositoryIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference <a name="GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_artifact_registry_repository_iam_member.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference;

new GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberCondition">GoogleArtifactRegistryRepositoryIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberConditionOutputReference.property.internalValue"></a>

```java
public GoogleArtifactRegistryRepositoryIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryRepositoryIamMember.GoogleArtifactRegistryRepositoryIamMemberCondition">GoogleArtifactRegistryRepositoryIamMemberCondition</a>

---



